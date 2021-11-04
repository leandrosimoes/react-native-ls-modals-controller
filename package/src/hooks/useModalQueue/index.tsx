import { useContext, useEffect, useRef, useState } from 'react'

import { ModalQueueContext } from '../../context'
import { ModalControllerState } from '../../interfaces'

function useModalQueue() {
    const { state, setState } = useContext(ModalQueueContext)
    const [currentId, setCurrentId] = useState<string | number>(0)
    const tempQueue = useRef<Array<string | number>>([])

    const stash = () => {
        tempQueue.current = state.queue
        setState({ queue: [] })
    }

    const pop = () => {
        const nextState: ModalControllerState = { queue: tempQueue.current }
        setState({ ...nextState })
    }

    const enqueue = (id: string | number) => {
        if (currentId === id) return

        setState((prev) => ({
            queue: [...prev.queue, id],
        }))
    }

    const dequeue = (id?: string | number) => {
        let nextState: ModalControllerState = { queue: [] }

        if (!id) {
            nextState = {
                queue: state.queue.slice(1, state.queue.length),
            }
        } else {
            nextState = {
                queue: state.queue.filter((i) => i !== id),
            }
        }

        setState({ ...nextState })
    }

    const clear = () => {
        setState({ queue: [] })
    }

    useEffect(() => {
        const next = state.queue.length > 0 ? state.queue[0] : 0

        setCurrentId(next)
    }, [state])

    return {
        state,
        currentId,
        enqueue,
        dequeue,
        stash,
        pop,
        clear,
    }
}

export default useModalQueue
