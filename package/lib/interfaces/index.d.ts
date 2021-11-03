/// <reference types="react" />
import { ModalProps } from 'react-native';
export declare type ModalControllerState = {
    queue: Array<number | string>;
};
export declare type ModalControllerContextProps = {
    state: ModalControllerState;
    setState: React.Dispatch<React.SetStateAction<ModalControllerState>>;
};
export declare type ModalQueueItemProps = ModalProps & {
    id: number | string;
    component: React.ReactNode;
    timeoutThreshold?: number;
};
export declare type ModalStackItemProps = ModalProps & {
    id: number | string;
    component: React.ReactNode;
    timeoutThreshold?: number;
};
export declare type ModalQueueProps = {
    timeoutThreshold?: number;
    children: React.ReactElement<ModalQueueItemProps>[] | React.ReactElement<ModalQueueItemProps>;
};
export declare type ModalStackProps = {
    timeoutThreshold?: number;
    children: React.ReactElement<ModalStackItemProps>[] | React.ReactElement<ModalStackItemProps>;
};
