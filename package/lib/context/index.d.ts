import React, { ReactNode } from 'react';
import { ModalControllerContextProps } from '../interfaces';
export declare const ModalQueueContext: React.Context<ModalControllerContextProps>;
export declare const ModalStackContext: React.Context<ModalControllerContextProps>;
export declare const ModalQueueProvider: React.FC<{
    children: ReactNode;
}>;
export declare const ModalStackProvider: React.FC<{
    children: ReactNode;
}>;
