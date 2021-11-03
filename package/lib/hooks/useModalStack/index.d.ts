declare function useModalStack(): {
    state: import("../..").ModalControllerState;
    currentId: string | number;
    add: (id: number) => void;
    remove: () => void;
    clear: () => void;
};
export default useModalStack;
