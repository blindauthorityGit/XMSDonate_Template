// store.js
import create from "zustand";

const useStore = create((set) => ({
    dimensions: { width: 0, height: 0 },
    setDimensions: (width, height) => set({ dimensions: { width, height } }),
    showUnclaimed: false, // Added the showUnclaimed state with an initial value of false
    setShowUnclaimed: (value) => set({ showUnclaimed: value }), // Added a setter function for showUnclaimed
    userList: [], // Initialize userList as an empty array
    setUserList: (users) => set({ userList: users }), // Setter function for userList
    showOverlay: false,
    setShowOverlay: (show) => set({ showOverlay: show }),
    isModalOpen: false,
    modalPosition: { x: 0, y: 0 },
    openModal: (x, y) => set({ isModalOpen: true, modalPosition: { x, y } }),
    closeModal: () => set({ isModalOpen: false }),
    setModalPosition: (x, y) => set({ modalPosition: { x, y } }),
    treeAnimationFinished: false,
    setTreeAnimationFinished: (value) => set({ treeAnimationFinished: value }),
}));

export default useStore;
