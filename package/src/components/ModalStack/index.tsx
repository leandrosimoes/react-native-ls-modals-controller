import React from 'react'

import { ModalStackProps } from '../../interfaces'
import ModaStackItem from '../ModalStackItem'

const ModaStack: React.FC<ModalStackProps> = ({
    children,
    timeoutThreshold,
}) => {
    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type !== ModaStackItem) {
            throw new Error(
                `ModaStack only accepts children of type \`ModaStackItem\`.`
            )
        }

        if (React.isValidElement(child) && child.type === ModaStackItem) {
            return React.cloneElement(child, {
                ...child.props,
                timeoutThreshold:
                    child.props.timeoutThreshold || timeoutThreshold,
            })
        }

        return child
    })

    return <>{childrenWithProps}</>
}

export default ModaStack
