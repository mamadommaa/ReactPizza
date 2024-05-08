const initialState = {
   authStatus: undefined,
};

const user = (state = initialState, action) => {
    if (action.type === "SET_AUTH_STATUS") {
        return {
            authStatus: action.payload,
        };
    }
    return state;
};

export default user;