declare function useModalQueue(): {
    state: import("../..").ModalControllerState;
    currentId: string | number;
    enqueue: (id: number) => void;
    dequeue: () => void;
    clear: () => void;
};
export default useModalQueue;
