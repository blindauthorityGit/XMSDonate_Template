import useStore from "../store/store";

const addToUserData = (newData) => {
    useStore.setState((state) => ({
        userData: { ...state.userData, ...newData },
    }));
};

export default addToUserData;
