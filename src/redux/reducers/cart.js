const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA_CART":
            const currentPizzaItems = state.items[action.payload.id] || [];
            const newPizzaItems = [...currentPizzaItems, action.payload];
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: newPizzaItems,
                },
                totalPrice: state.totalPrice + action.payload.price,
                totalCount: state.totalCount + 1,
            };
        case "DELETE_CART_ITEMS":
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0,
            };
        default:
            return state;
    }
};

export default cart;
