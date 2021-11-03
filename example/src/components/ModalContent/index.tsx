import React from 'react'
import { Button, Text, View } from 'react-native'

const ModalContent: React.FC<{ id: number; onClearButtonPress?(): void }> = ({
    id,
    onClearButtonPress,
}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Modal {id}</Text>
            {!!onClearButtonPress && <Button title='Clear Queue' onPress={onClearButtonPress} />}
        </View>
    )
}

export default ModalContent
