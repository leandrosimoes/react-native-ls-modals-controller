import React, { createContext, useState } from 'react'

import {
    ModalControllerContextProps,
    ModalControllerState,
} from '../interfaces'

const DEFAULT_STATE: ModalControllerState = {
    queue: [],
}

const INITIAL_STATE: ModalControllerContextProps = {
    state: DEFAULT_STATE,
    setState: () => {},
}

export const ModalQueueContext = createContext(INITIAL_STATE)
export const ModalStackContext = createContext(INITIAL_STATE)

export const ModalQueueProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(INITIAL_STATE.state)

    return (
        <ModalQueueContext.Provider value={{ state, setState }}>
            {children}
        </ModalQueueContext.Provider>
    )
}

export const ModalStackProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(INITIAL_STATE.state)

    return (
        <ModalStackContext.Provider value={{ state, setState }}>
            {children}
        </ModalStackContext.Provider>
    )
}
