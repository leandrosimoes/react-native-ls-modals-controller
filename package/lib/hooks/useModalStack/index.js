import { useContext, useEffect, useRef, useState } from 'react';
import { ModalStackContext } from '../../context';
function useModalStack() {
    const { state, setState } = useContext(ModalStackContext);
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
    const add = (id) => {
        if (currentId === id)
            return;
        setState((prev) => ({ queue: [...prev.queue, id] }));
    };
    const remove = (id) => {
        if (state.queue.length === 0)
            return;
        setState((prev) => {
            if (!id)
                return { queue: prev.queue.slice(0, state.queue.length - 1) };
            return { queue: prev.queue.filter((i) => i !== id) };
        });
    };
    const clear = () => {
        if (state.queue.length === 0)
            return;
        setState(() => ({ queue: [] }));
    };
    useEffect(() => {
        setCurrentId(() => state.queue.length > 0 ? state.queue[state.queue.length - 1] : 0);
    }, [state.queue]);
    return {
        state,
        currentId,
        add,
        remove,
        stash,
        pop,
        clear,
    };
}
export default useModalStack;
