import React, { useEffect } from 'react'
import { Button, ModalProps, Text, View } from 'react-native'
import { ModalStack, ModalStackItem, useModalStack } from 'react-native-ls-modals-controller'

import { delay } from '../../utils'

import ModalContent from '../ModalContent'

const StackSample = () => {
    const { add, remove, clear } = useModalStack()

    const handleStackAll = async (withDelay?: boolean) => {
        add(1)

        if (withDelay) await delay()

        add(2)

        if (withDelay) await delay()

        add(3)
    }

    const defaultModalProps: ModalProps = { animationType: 'slide' }

    useEffect(() => {
        return () => {
            clear()
        }
    }, [])

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
            }}>
            <Text>Using Stack</Text>
            <ModalStack>
                <ModalStackItem
                    id={1}
                    component={
                        <ModalContent
                            id={1}
                            onCloseButtonPress={() => remove()}
                            onClearButtonPress={() => clear()}
                        />
                    }
                    {...defaultModalProps}
                />
                <ModalStackItem
                    id={2}
                    component={
                        <ModalContent
                            id={2}
                            onCloseButtonPress={() => remove()}
                            onClearButtonPress={() => clear()}
                        />
                    }
                    {...defaultModalProps}
                />
                <ModalStackItem
                    id={3}
                    component={
                        <ModalContent
                            id={3}
                            onCloseButtonPress={() => remove()}
                            onClearButtonPress={() => clear()}
                        />
                    }
                    {...defaultModalProps}
                />
            </ModalStack>

            <View style={{ justifyContent: 'space-around', height: 220 }}>
                <Button onPress={() => add(1)} title='Show Modal 1' />
                <Button onPress={() => add(2)} title='Show Modal 2' />
                <Button onPress={() => add(3)} title='Show Modal 3' />
                <Button onPress={() => handleStackAll(true)} title='Stack All With Delay' />
                <Button onPress={() => handleStackAll(false)} title='Stack All Without Delay' />
            </View>
        </View>
    )
}

export default StackSample
