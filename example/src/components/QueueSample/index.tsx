import React from 'react'
import { Button, ModalProps, View } from 'react-native'
import {
    ModalQueue,
    ModalQueueItem,
    ModalQueueProvider,
    useModalQueue,
} from 'react-native-ls-modals-controller'

import { delay } from '../../utils'

import ModalContent from '../ModalContent'

const QueueSample = () => {
    const { enqueue, clear } = useModalQueue()

    const handleEnqueueAll = async (withDelay?: boolean) => {
        enqueue(1)

        if (withDelay) await delay()

        enqueue(2)

        if (withDelay) await delay()

        enqueue(3)
    }

    const defaultModalProps: ModalProps = { animationType: 'slide' }

    return (
        <ModalQueueProvider>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                }}>
                <ModalQueue>
                    <ModalQueueItem
                        id={1}
                        component={<ModalContent id={1} />}
                        {...defaultModalProps}
                    />
                    <ModalQueueItem
                        id={2}
                        component={<ModalContent id={2} />}
                        {...defaultModalProps}
                    />
                    <ModalQueueItem
                        id={3}
                        component={<ModalContent id={3} onClearButtonPress={() => clear()} />}
                        {...defaultModalProps}
                    />
                </ModalQueue>

                <View style={{ justifyContent: 'space-around', height: 200 }}>
                    <Button onPress={() => enqueue(1)} title='Show Modal 1' />
                    <Button onPress={() => enqueue(2)} title='Show Modal 2' />
                    <Button onPress={() => enqueue(3)} title='Show Modal 3' />
                    <Button onPress={() => handleEnqueueAll(true)} title='Enqueue All With Delay' />
                    <Button
                        onPress={() => handleEnqueueAll(false)}
                        title='Enqueue All Without Delay'
                    />
                </View>
            </View>
        </ModalQueueProvider>
    )
}

export default QueueSample
