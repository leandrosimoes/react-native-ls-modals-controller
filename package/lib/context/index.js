import React, { createContext, useState } from 'react';
const DEFAULT_QUEUE_STATE = {
    queue: [],
};
const INITIAL_QUEUE_STATE = {
    state: DEFAULT_QUEUE_STATE,
    setState: () => { },
};
const DEFAULT_STACK_STATE = {
    queue: [],
};
const INITIAL_STACK_STATE = {
    state: DEFAULT_STACK_STATE,
    setState: () => { },
};
export const ModalQueueContext = createContext(INITIAL_QUEUE_STATE);
export const ModalStackContext = createContext(INITIAL_STACK_STATE);
export const ModalQueueProvider = ({ children }) => {
    const [state, setState] = useState(INITIAL_QUEUE_STATE.state);
    return (<ModalQueueContext.Provider value={{ state, setState }}>
            {children}
        </ModalQueueContext.Provider>);
};
export const ModalStackProvider = ({ children }) => {
    const [state, setState] = useState(INITIAL_STACK_STATE.state);
    return (<ModalStackContext.Provider value={{ state, setState }}>
            {children}
        </ModalStackContext.Provider>);
};
