import React, { useEffect, useState } from 'react';
import { Modal } from 'react-native';
import { useModalQueue } from '../../hooks';
const ModalQueueItem = ({ id, component, timeoutThreshold = 300, ...rest }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { currentId } = useModalQueue();
    useEffect(() => {
        let timeout;
        if (currentId === id) {
            timeout = setTimeout(() => setIsVisible(true), timeoutThreshold);
        }
        else {
            setIsVisible(false);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [currentId]);
    return (<Modal {...rest} visible={isVisible}>
            {component}
        </Modal>);
};
export default ModalQueueItem;
