import React from 'react'
import { View } from 'react-native'
import { ModalQueueProvider } from 'react-native-ls-modals-controller'

import Home from '../Home'

import styles from './styles'

const App = () => {
    return (
        <ModalQueueProvider>
            <View style={styles.container}>
                <Home />
            </View>
        </ModalQueueProvider>
    )
}

export default App
