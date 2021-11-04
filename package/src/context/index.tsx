import React, { createContext, useState } from 'react'

import {
    ModalControllerContextProps,
    ModalControllerState,
} from '../interfaces'

const DEFAULT_QUEUE_STATE: ModalControllerState = {
    queue: [],
}

const INITIAL_QUEUE_STATE: ModalControllerContextProps = {
    state: DEFAULT_QUEUE_STATE,
    setState: () => {},
}

const DEFAULT_STACK_STATE: ModalControllerState = {
    queue: [],
}

const INITIAL_STACK_STATE: ModalControllerContextProps = {
    state: DEFAULT_STACK_STATE,
    setState: () => {},
}

export const ModalQueueContext = createContext(INITIAL_QUEUE_STATE)
export const ModalStackContext = createContext(INITIAL_STACK_STATE)

export const ModalQueueProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(INITIAL_QUEUE_STATE.state)

    return (
        <ModalQueueContext.Provider value={{ state, setState }}>
            {children}
        </ModalQueueContext.Provider>
    )
}

export const ModalStackProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(INITIAL_STACK_STATE.state)

    return (
        <ModalStackContext.Provider value={{ state, setState }}>
            {children}
        </ModalStackContext.Provider>
    )
}
