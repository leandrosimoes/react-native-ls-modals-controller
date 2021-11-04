import { useContext, useEffect, useRef, useState } from 'react'

import { ModalControllerState } from '../..'
import { ModalStackContext } from '../../context'

function useModalStack() {
    const { state, setState } = useContext(ModalStackContext)
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

    const add = (id: string | number) => {
        if (currentId === id) return

        setState((prev) => ({
            queue: [...prev.queue, id],
        }))
    }

    const remove = (id?: string | number) => {
        let nextState: ModalControllerState = { queue: [] }

        if (!id) {
            nextState = {
                queue: state.queue.slice(0, state.queue.length - 1),
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
        const next =
            state.queue.length > 0 ? state.queue[state.queue.length - 1] : 0

        setCurrentId(next)
    }, [state])

    return {
        state,
        currentId,
        add,
        remove,
        stash,
        pop,
        clear,
    }
}

export default useModalStack
