import React from 'react';
import ModalQueueItem from '../ModalQueueItem';
const ModalQueue = ({ children, timeoutThreshold, }) => {
    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type !== ModalQueueItem) {
            throw new Error(`ModalQueue only accepts children of type \`ModalQueueItem\`.`);
        }
        if (React.isValidElement(child) && child.type === ModalQueueItem) {
            return React.cloneElement(child, {
                ...child.props,
                timeoutThreshold: child.props.timeoutThreshold || timeoutThreshold,
            });
        }
        return child;
    });
    return <>{childrenWithProps}</>;
};
export default ModalQueue;
