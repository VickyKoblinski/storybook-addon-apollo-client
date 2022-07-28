/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, useState } from 'react';
import {
  // useGlobals,
  useParameter,
} from '@storybook/api';
import { Placeholder } from '@storybook/components';
import {
  PARAM_KEY,
  // ADDON_ID
} from './constants';
import { Parameters } from './types';

export const ApolloClientPanel: React.FC = () => {
  // const [globals] = useGlobals();

  // const msgs = globals[`${ADDON_ID}/messages`] ?? [];

  const { messages = [] } = useParameter<Partial<Parameters>>(
    PARAM_KEY,
    {}
  ) as Partial<Parameters>;
  const [activeMessageIndex] = useState<number>(() =>
    messages.length ? 0 : -1
  );

  if (messages.length === 0) {
    return <Placeholder>No messages for this story</Placeholder>;
  }

  // const mockedMessage = messages[activeMessageIndex];
  // const m = msgs[activeMessageIndex];

  return <Fragment key={activeMessageIndex}>todo</Fragment>;
};
