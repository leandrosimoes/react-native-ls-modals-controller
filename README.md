# react-native-ls-modals-controller

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b3d75dc0717a476198c95eea568847d4)](https://www.codacy.com/gh/leandrosimoes/react-native-ls-modals-controller/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=leandrosimoes/react-native-ls-modals-controller&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/react-native-ls-modals-controller.svg)](https://badge.fury.io/js/react-native-ls-modals-controller)
![Node.js Package](https://github.com/leandrosimoes/react-native-ls-modals-controller/workflows/Node%2Ejs%20Package/badge.svg)

A React Native library to control multiple modals as a queue or a stack and avois some errors, specially on iOS

## Install

`npm i react-native-ls-modals-controller` 

or 

`yarn add react-native-ls-modals-controller`

## Usage

1) Wrap your app content with the `ModalQueueProvider` or `ModalStackProvider`

```jsx
import { ModalQueueProvider, ModalStackProvider } from 'react-native-ls-modals-controller'

export default App = () => {
    return (
        <ModalQueueProvider>
            <ModalStackProvider>
                ...
            </ModalStackProvider>
        </ModalQueueProvider>
    )
}
```

* PS: We strongly recomend using just one controller, `ModalQueueProvider` or `ModalStackProvider`. Since the state of both are not shared between each other, just use in case you really know how you'll control between the modals in each provider. We are planing to create a better way to manage that in the future.

2) Create a `ModalQueue` or a `ModalStack` and add some `ModalQueueItem` or `ModalStackItem` childs as you want

```jsx
const defaultModalProps = { animationType: 'slide' }

<ModalQueue>
    <ModalQueueItem id={1} component={...} {...defaultModalProps} />
    <ModalQueueItem id={2} component={...} {...defaultModalProps} />
    <ModalQueueItem id={3} component={...} {...defaultModalProps} />
    ...
</ModalQueue>

<ModalStack>
    <ModalStackItem id={1} component={...} {...defaultModalProps} />
    <ModalStackItem id={2} component={...} {...defaultModalProps} />
    <ModalStackItem id={3} component={...} {...defaultModalProps} />
    ...
</ModalStack>
```

3) Use the `useModalQueue` or `useModalStack` hooks to have access for state and methods

```jsx
    const { state, currentId, enqueue, dequeue, clear } = useModalQueue()
    ...
    
    const { state, currentId, add, remove, clear } = useModalStack()
    ...
```

## Types

```typescript
type ModalControllerState = {
    queue: Array<number | string>
}

type ModalControllerContextProps = {
    state: ModalControllerState
    setState: React.Dispatch<React.SetStateAction<ModalControllerState>>
}

type ModalQueueItemProps = ModalProps & {
    id: number | string
    component: React.ReactNode
    timeoutThreshold?: number
}

type ModalStackItemProps = ModalProps & {
    id: number | string
    component: React.ReactNode
    timeoutThreshold?: number
}

type ModalQueueProps = {
    timeoutThreshold?: number
    children:
        | React.ReactElement<ModalQueueItemProps>[]
        | React.ReactElement<ModalQueueItemProps>
}

type ModalStackProps = {
    timeoutThreshold?: number
    children:
        | React.ReactElement<ModalStackItemProps>[]
        | React.ReactElement<ModalStackItemProps>
}
```
