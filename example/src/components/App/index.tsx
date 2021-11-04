import React, { useState } from 'react'
import { Button, View } from 'react-native'
import { ModalQueueProvider, ModalStackProvider } from 'react-native-ls-modals-controller'

import QueueSample from '../QueueSample'
import StackSample from '../StackSample'

const App = () => {
    const [useStack, setUseStack] = useState(true)

    return (
        <ModalQueueProvider>
            <ModalStackProvider>
                <View style={{ flex: 1, paddingHorizontal: 30, paddingVertical: 100 }}>
                    {!useStack && <QueueSample />}
                    {!useStack && (
                        <Button
                            title='Use Stack'
                            onPress={() => setUseStack(true)}
                            color='orangered'
                        />
                    )}
                    {useStack && <StackSample />}
                    {useStack && (
                        <Button
                            title='Use Queue'
                            onPress={() => setUseStack(false)}
                            color='orangered'
                        />
                    )}
                </View>
            </ModalStackProvider>
        </ModalQueueProvider>
    )
}

export default App
