import { FC } from 'react';
import { PARAM_KEY, ADDON_ID } from './constants';
import { useGlobals, useEffect, useParameter } from '@storybook/addons';
import { print } from 'graphql';
import type { Parameters } from './types';

import { WebSocket, Server, Client } from 'mock-socket';
// import createCable from '../src/actioncable';

import ActionCable from 'actioncable';
import { RenderOptions, types, addons, useState } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';

/* tslint:disable-next-line */
(ActionCable as any).WebSocket = WebSocket;

export const WithMockSocket = (Story: FC<unknown>): JSX.Element => {
  const { CreateCable, ...providerProps } = useParameter<Partial<Parameters>>(
    PARAM_KEY,
    {}
  ) as Partial<Parameters>;
  const { messages = [] } = providerProps ?? {};
  const [, setGlobals] = useGlobals();

  const [client, setClient] = useState<Client | undefined>(undefined);
  // const parameters = useParameter<Parameters | undefined>("actionCable", undefined);

  useEffect(() => {
    if (CreateCable) {
      const fakeURL = 'ws://fake/';
      const mockServer = new Server(fakeURL);

      mockServer.on('connection', (client) => {
        setClient(client);
        // server.send(
        //   JSON.stringify({
        //     identifier: JSON.stringify({ channel: "PipelineChannel", room: 193680 }),
        //     message: {
        //       level: "info",
        //       message:
        //         "spacedust-storybook-7q7bc/spacedust-storybook: <s> [webpack.Progress] 10% building 0/3 entries 68/100 dependencies 0/49 modules",
        //       task_id: 1961618,
        //       task_chain_id: 563846,
        //       pipeline_stage_id: 694130,
        //       pipeline_id: 193680,
        //       aasm_state: "running",
        //       started_at: "2022-07-28T02:10:35.810Z",
        //       duration: null,
        //     },
        //   })
        // );
        // // ();

        // console.log("connected");
      });

      CreateCable(fakeURL);
    }
  }, []);

  useEffect(() => {
    if (client && messages?.length) {
      messages.forEach((message) => {
        setTimeout(() => {
          client.send(
            JSON.stringify({
              identifier: JSON.stringify(message.identifier),
              message: message.message,
            })
          );
        }, message.delay);
      });
    }
  }, [client, messages]);

  useEffect(() => {
    setGlobals({
      [`${ADDON_ID}/messages`]: messages.map((message) =>
        JSON.stringify(message)
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Story />;
};
