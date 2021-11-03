import React, { createContext, useState } from 'react';
const DEFAULT_STATE = {
    queue: [],
};
const INITIAL_STATE = {
    state: DEFAULT_STATE,
    setState: () => { },
};
export const ModalQueueContext = createContext(INITIAL_STATE);
export const ModalStackContext = createContext(INITIAL_STATE);
export const ModalQueueProvider = ({ children }) => {
    const [state, setState] = useState(INITIAL_STATE.state);
    return (<ModalQueueContext.Provider value={{ state, setState }}>
            {children}
        </ModalQueueContext.Provider>);
};
export const ModalStackProvider = ({ children }) => {
    const [state, setState] = useState(INITIAL_STATE.state);
    return (<ModalStackContext.Provider value={{ state, setState }}>
            {children}
        </ModalStackContext.Provider>);
};
