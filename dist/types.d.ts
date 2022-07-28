/// <reference types="react" />
import { Cable } from 'actioncable';
export interface MockedProviderProps {
    [key: string]: any;
    children?: React.ReactNode;
    messages?: ReadonlyArray<MockedMessage>;
}
export declare type MockedProvider = React.FC<MockedProviderProps>;
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
