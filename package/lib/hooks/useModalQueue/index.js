import { useContext, useEffect, useRef, useState } from 'react';
import { ModalQueueContext } from '../../context';
function useModalQueue() {
    const { state, setState } = useContext(ModalQueueContext);
    const [currentId, setCurrentId] = useState(0);
    const tempQueue = useRef([]);
    const stash = () => {
        if (state.queue.length === 0)
            return;
        tempQueue.current = state.queue;
        setState(() => ({ queue: [] }));
    };
    const pop = () => {
        if (tempQueue.current.length === 0)
            return;
        setState(() => ({ queue: tempQueue.current }));
    };
    const enqueue = (id) => {
        if (currentId === id)
            return;
        setState((prev) => ({ queue: [...prev.queue, id] }));
    };
    const dequeue = (id) => {
        if (state.queue.length === 0)
            return;
        setState((prev) => {
            if (!id)
                return { queue: prev.queue.slice(1, state.queue.length) };
            return { queue: prev.queue.filter((i) => i !== id) };
        });
    };
    const clear = () => {
        if (state.queue.length === 0)
            return;
        setState(() => ({ queue: [] }));
    };
    useEffect(() => {
        setCurrentId(() => (state.queue.length > 0 ? state.queue[0] : 0));
    }, [state.queue]);
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
