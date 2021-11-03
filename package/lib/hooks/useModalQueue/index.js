import { useContext, useEffect, useState } from 'react';
import { ModalQueueContext } from '../../context';
function useModalQueue() {
    const { state, setState } = useContext(ModalQueueContext);
    const [currentId, setCurrentId] = useState(0);
    const enqueue = (id) => {
        setState((prev) => ({
            queue: [...prev.queue, id],
        }));
    };
    const dequeue = () => {
        setState((prev) => ({
            queue: prev.queue.slice(1, prev.queue.length),
        }));
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
        clear,
    };
}
export default useModalQueue;
