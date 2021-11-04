import { useContext, useEffect, useState } from 'react';
import { ModalStackContext } from '../../context';
function useModalStack() {
    const { state, setState } = useContext(ModalStackContext);
    const [currentId, setCurrentId] = useState(0);
    const add = (id) => {
        if (currentId === id)
            return;
        setState((prev) => ({
            queue: [...prev.queue, id],
        }));
    };
    const remove = (id) => {
        let nextState = { queue: [] };
        if (!id) {
            nextState = {
                queue: state.queue.slice(0, state.queue.length - 1),
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
