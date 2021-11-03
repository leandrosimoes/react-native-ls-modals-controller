import { ModalProps } from 'react-native'

export type ModalControllerState = {
    queue: Array<number | string>
}

export type ModalControllerContextProps = {
    state: ModalControllerState
    setState: React.Dispatch<React.SetStateAction<ModalControllerState>>
}

export type ModalQueueItemProps = ModalProps & {
    id: number | string
    component: React.ReactNode
    timeoutThreshold?: number
}

export type ModalStackItemProps = ModalProps & {
    id: number | string
    component: React.ReactNode
    timeoutThreshold?: number
}

export type ModalQueueProps = {
    timeoutThreshold?: number
    children:
        | React.ReactElement<ModalQueueItemProps>[]
        | React.ReactElement<ModalQueueItemProps>
}

export type ModalStackProps = {
    timeoutThreshold?: number
    children:
        | React.ReactElement<ModalStackItemProps>[]
        | React.ReactElement<ModalStackItemProps>
}
