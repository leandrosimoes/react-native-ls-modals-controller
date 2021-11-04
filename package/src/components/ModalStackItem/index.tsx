import React, { useEffect, useState } from 'react'
import { Modal } from 'react-native'

import { ModalStackItemProps } from '../../interfaces'
import { useModalStack } from '../../hooks'

const ModalStackItem: React.FC<ModalStackItemProps> = ({
    id,
    component,
    timeoutThreshold = 300,
    ...rest
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const { currentId } = useModalStack()

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
        <Modal {...rest} visible={isVisible}>
            {component}
        </Modal>
    )
}

export default ModalStackItem
