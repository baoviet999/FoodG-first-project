import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
    name: "food",
    initialState: {
        count: 1,
        type: "/best-foods",
        cartItems: [],
        favoriteItem: [],
        openCart: false,
    },
    reducers: {
        increateCount(state) {
            state.count = state.count + 1;
        },
        decreaseCount(state) {
            state.count = state.count - 1;
        },
        changeCount(state, action) {
            state.count = action.payload;
        },
        changeType(state, action) {
            state.type = action.payload;
        },

        addToCart(state, action) {
            const newItem = action.payload;
            const hasItem = state.cartItems.findIndex((x) => x.id === newItem.id);
            if (hasItem >= 0) {
                state.cartItems[hasItem].quantity += newItem.quantity;
            } else {
                state.cartItems.push(newItem);
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const deleteId = state.cartItems.findIndex((x) => x.id === id);
            state.cartItems.splice(deleteId, 1);
        },
        openCart(state) {
            state.openCart = true;
        },
        closeCart(state) {
            state.openCart = false;
        },
    },
});
const { actions, reducer } = foodSlice;
export default reducer;
export const {
    increateCount,
    decreaseCount,
    changeCount,
    changeType,
    addToCart,
    removeFromCart,
    openCart,
    closeCart,
} = actions;
