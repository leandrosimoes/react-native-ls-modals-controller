import { useContext, useEffect, useRef, useState } from 'react';
import { ModalQueueContext } from '../../context';
function useModalQueue() {
    const { state, setState } = useContext(ModalQueueContext);
    const [currentId, setCurrentId] = useState(0);
    const tempQueue = useRef([]);
    const stash = () => {
        tempQueue.current = state.queue;
        setState({ queue: [] });
    };
    const pop = () => {
        const nextState = { queue: tempQueue.current };
        setState({ ...nextState });
    };
    const enqueue = (id) => {
        if (currentId === id)
            return;
        setState((prev) => ({
            queue: [...prev.queue, id],
        }));
    };
    const dequeue = (id) => {
        let nextState = { queue: [] };
        if (!id) {
            nextState = {
                queue: state.queue.slice(1, state.queue.length),
            };
        }
        else {
            nextState = {
                queue: state.queue.filter((i) => i !== id),
            };
        }
        setState({ ...nextState });
    };
    const clear = () => {
        setState({ queue: [] });
    };
    useEffect(() => {
        const next = state.queue.length > 0 ? state.queue[0] : 0;
        setCurrentId(next);
    }, [state]);
    return {
        state,
        currentId,
        enqueue,
        dequeue,
        stash,
        pop,
        clear,
    };
}
export default useModalQueue;
