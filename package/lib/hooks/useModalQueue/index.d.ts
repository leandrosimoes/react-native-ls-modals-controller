import { ModalControllerState } from '../../interfaces';
declare function useModalQueue(): {
    state: ModalControllerState;
    currentId: string | number;
    enqueue: (id: string | number) => void;
    dequeue: (id?: string | number | undefined) => void;
    stash: () => void;
    pop: () => void;
    clear: () => void;
};
export default useModalQueue;
