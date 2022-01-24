import { createSelector } from "@reduxjs/toolkit";

const cartItemSelector = (state) => state.food.cartItems;

const cartItemCountSelector = createSelector(cartItemSelector, (cartItems) =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)
);
const cartItemTotalPrice = createSelector(cartItemSelector, (cartItems) =>
    cartItems.reduce((acc, item) => acc + (item.foodProduct.price * item.quantity), 0)
);
export { cartItemCountSelector, cartItemTotalPrice };
