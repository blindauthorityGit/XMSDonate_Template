// store.js
import create from "zustand";

const useStore = create((set) => ({
    dimensions: { width: 0, height: 0 },
    setDimensions: (width, height) => set({ dimensions: { width, height } }),
}));

export default useStore;
