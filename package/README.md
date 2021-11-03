# react-native-ls-modals-controller

A simple React Native modals queue to handle multiple modals without errors, specially in iOS

## Installing

Run `npm i react-native-ls-modals-controller` or `yarn add react-native-ls-modals-controller`

## Usage

1) Wrap the application content with the Modal Queue Provider

```jsx
import { ModalQueueProvider } from 'react-native-ls-modals-controller'

const App = () => {
    return (
        <ModalQueueProvider>
            {/* REST OF THE APP COMPONENTS */}
        </ModalQueueProvider>
    )
}
```

2) Create a ModalQueue with some ModalQueueItem's inside

```jsx
const ModalContent = () => {
    return (
        <View>
            <Text>This is just a component to use in the ModalQueueItem component prop</Text>
        </View>
    )
}

const MyModalQueue = () => {
    const defaultModalProps: ModalProps = { animationType: 'slide' }

    return (
        <ModalQueue timeoutThreshold={1000}>
            <ModalQueueItem id={1} component={<ModalContent />} {...defaultModalProps} />
            <ModalQueueItem id={2} component={<ModalContent />} {...defaultModalProps} />
            <ModalQueueItem id={3} component={<ModalContent />} {...defaultModalProps} />
        </ModalQueue>
    )
}
```

3) Use the `useModalQueue` hook to access the queue state and methods

```jsx
import { useModalQueue } from 'react-native-ls-modals-controller'

const MyComponent = () => {
    const { 
        enqueue, // Add a modal to the queue based on the id passed
        dequeue,  // Dequeue the first modal open
        clear, // Dequeue all modals
        state, // State containing the `queue` props that is an array of modal ids enqueued
        currentId // First open modal
    } = useModalQueue()


    return (
        ...
    )
}
```