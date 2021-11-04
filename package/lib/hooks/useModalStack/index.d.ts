declare function useModalStack(): {
    state: import("../..").ModalControllerState;
    currentId: string | number;
    add: (id: string | number) => void;
    remove: (id?: string | number | undefined) => void;
    stash: () => void;
    pop: () => void;
    clear: () => void;
};
export default useModalStack;
