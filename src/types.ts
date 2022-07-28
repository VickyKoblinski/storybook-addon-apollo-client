import { Cable } from 'actioncable';
export interface MockedProviderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  children?: React.ReactNode;
  messages?: ReadonlyArray<MockedMessage>;
}

export type MockedProvider = React.FC<MockedProviderProps>;

export interface Parameters extends MockedProviderProps {
  CreateCable: (arg0: string) => Cable;
  MockedProvider: MockedProvider;
}

export interface MockedMessage {
  delay: number;
  identifier: {
    channel: string;
    room: number;
  };
  message: any;
}
