declare function useModalQueue(): {
    state: import("../..").ModalControllerState;
    currentId: string | number;
    enqueue: (id: string | number) => void;
    dequeue: (id?: string | number | undefined) => void;
    stash: () => void;
    pop: () => void;
    clear: () => void;
};
export default useModalQueue;
