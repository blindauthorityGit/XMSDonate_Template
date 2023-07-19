// store.js
import create from "zustand";

const useStore = create((set) => ({
    dimensions: { width: 0, height: 0 },
    setDimensions: (width, height) => set({ dimensions: { width, height } }),
    showUnclaimed: false, // Added the showUnclaimed state with an initial value of false
    setShowUnclaimed: (value) => set({ showUnclaimed: value }), // Added a setter function for showUnclaimed
    userList: [], // Initialize userList as an empty array
    setUserList: (users) => set({ userList: users }), // Setter function for userList
}));

export default useStore;
