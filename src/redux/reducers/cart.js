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
                    [action.payload.id]: newPizzaItems
                },
                totalPrice: state.totalPrice + action.payload.price,
                totalCount: state.totalCount + 1,
            };
        default:
            return state;
    }
};




export default cart;



// const cart = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD_PIZZA_CART":
//             return {
//                 ...state,
//                 items: {
//                     [action.payload.id]: [
//                         ...state.items[action.payload.id],
//                         action.payload
//                    ]
//                 },
//                 // totalPrice: totalPrice + action.payload.price,
//                 // totalCount: totalCount + 1,
//             };
//         default:
//             return state;
//     }
// };
