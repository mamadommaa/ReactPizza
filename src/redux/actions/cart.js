export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
})

export const deleteCartItems = () => ({
    type: 'DELETE_CART_ITEMS',
})