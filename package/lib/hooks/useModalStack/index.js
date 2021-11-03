import { useContext, useEffect, useState } from 'react';
import { ModalStackContext } from '../../context';
function useModalStack() {
    const { state, setState } = useContext(ModalStackContext);
    const [currentId, setCurrentId] = useState(0);
    const add = (id) => {
        setState((prev) => ({
            queue: [...prev.queue, id],
        }));
    };
    const remove = () => {
        setState((prev) => ({
            queue: prev.queue.slice(0, prev.queue.length - 1),
        }));
    };
    const clear = () => {
        setState({ queue: [] });
    };
    useEffect(() => {
        const next = state.queue.length > 0 ? state.queue[state.queue.length - 1] : 0;
        setCurrentId(next);
    }, [state]);
    return {
        state,
        currentId,
        add,
        remove,
        clear,
    };
}
export default useModalStack;
