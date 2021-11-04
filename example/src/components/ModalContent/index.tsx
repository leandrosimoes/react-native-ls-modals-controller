import React from 'react'
import { Button, Text, View } from 'react-native'

const ModalContent: React.FC<{
    id: number
    onClearButtonPress(): void
    onCloseButtonPress(): void
}> = ({ id, onClearButtonPress, onCloseButtonPress }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View
                style={{
                    height: 120,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Text>Modal {id}</Text>
                <Button title='Clear Queue' onPress={onClearButtonPress} />
                <Button title='Close Modal' onPress={onCloseButtonPress} color='orangered' />
            </View>
        </View>
    )
}

export default ModalContent
