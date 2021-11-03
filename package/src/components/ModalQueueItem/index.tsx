import React, { useEffect, useState } from 'react'
import { Modal } from 'react-native'

import { ModalQueueItemProps } from '../../interfaces'
import { useModalQueue } from '../../hooks'

const ModalQueueItem: React.FC<ModalQueueItemProps> = ({
    id,
    component,
    timeoutThreshold = 300,
    ...rest
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const { currentId, dequeue } = useModalQueue()

    const handleOnRequestClose = () => {
        if (rest.onRequestClose) rest.onRequestClose()

        dequeue()
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout

        if (currentId === id) {
            timeout = setTimeout(() => setIsVisible(true), timeoutThreshold)
        } else {
            setIsVisible(false)
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [currentId])

    return (
        <Modal
            {...rest}
            visible={isVisible}
            onRequestClose={handleOnRequestClose}
        >
            {component}
        </Modal>
    )
}

export default ModalQueueItem
