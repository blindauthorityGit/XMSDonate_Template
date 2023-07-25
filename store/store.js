// store.js
import create from "zustand";

const useStore = create((set) => ({
    dimensions: { width: 0, height: 0 },
    setDimensions: (width, height) => set({ dimensions: { width, height } }),
    showUnclaimed: false,
    setShowUnclaimed: (value) => set({ showUnclaimed: value }),
    userList: [],
    setUserList: (users) => set({ userList: users }),
    showOverlay: false,
    setShowOverlay: (show) => set({ showOverlay: show }),
    isModalOpen: false,
    modalPosition: { x: 0, y: 0 },
    openModal: (x, y) => set({ isModalOpen: true, modalPosition: { x, y } }),
    closeModal: () => set({ isModalOpen: false }),
    setModalPosition: (x, y) => set({ modalPosition: { x, y } }),
    treeAnimationFinished: false,
    setTreeAnimationFinished: (value) => set({ treeAnimationFinished: value }),
    // Add the isSidebarOpen state with an initial value of false
    isSidebarOpen: false,
    // Add a setter function for isSidebarOpen
    setSidebarOpen: (value) => set({ isSidebarOpen: value }),
}));

export default useStore;
