import React from 'react'
import { Button, ModalProps, View } from 'react-native'
import {
    ModalStack,
    ModalStackItem,
    ModalStackProvider,
    useModalStack,
} from 'react-native-ls-modals-controller'

import { delay } from '../../utils'

import ModalContent from '../ModalContent'

const StackSample = () => {
    const { add, clear } = useModalStack()

    const handleStackAll = async (withDelay?: boolean) => {
        add(1)

        if (withDelay) await delay()

        add(2)

        if (withDelay) await delay()

        add(3)
    }

    const defaultModalProps: ModalProps = { animationType: 'slide' }

    return (
        <ModalStackProvider>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                }}>
                <ModalStack>
                    <ModalStackItem
                        id={1}
                        component={<ModalContent id={1} />}
                        {...defaultModalProps}
                    />
                    <ModalStackItem
                        id={2}
                        component={<ModalContent id={2} />}
                        {...defaultModalProps}
                    />
                    <ModalStackItem
                        id={3}
                        component={<ModalContent id={3} onClearButtonPress={() => clear()} />}
                        {...defaultModalProps}
                    />
                </ModalStack>

                <View style={{ justifyContent: 'space-around', height: 200 }}>
                    <Button onPress={() => add(1)} title='Show Modal 1' />
                    <Button onPress={() => add(2)} title='Show Modal 2' />
                    <Button onPress={() => add(3)} title='Show Modal 3' />
                    <Button onPress={() => handleStackAll(true)} title='Stack All With Delay' />
                    <Button onPress={() => handleStackAll(false)} title='Stack All Without Delay' />
                </View>
            </View>
        </ModalStackProvider>
    )
}

export default StackSample
