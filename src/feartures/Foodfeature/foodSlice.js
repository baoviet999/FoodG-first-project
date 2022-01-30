import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
    name: "food",
    initialState: {
        count: 1,
        type: "/best-foods",
        cartItems:  [],
        favoriteItem: [],
        openCart: false,
        openFavorite: false,
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
        reloadCart(state) {
            localStorage.setItem("carts", JSON.stringify(state.cartItems));
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
        addToFavortite(state, action) {
            const newFavorite = action.payload;
            console.log(newFavorite);
            const hasFavorite = state.favoriteItem.findIndex((x) => x.id === newFavorite.id);
            if (hasFavorite < 0) {
                state.favoriteItem.push(newFavorite);
            }
        },
        logoutCart(state) {
            state.cartItems = []
        },
        removeFromFavorite(state, action) {
            const itemDelete = action.payload;
            const indexDelete = state.favoriteItem.findIndex((x) => x.id === itemDelete);
            state.favoriteItem.splice(indexDelete, 1);
        },
        openFavorite(state) {
            state.openFavorite = true;
        },
        closeFavorite(state) {
            state.openFavorite = false;
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
    addToFavortite,
    openFavorite,
    closeFavorite,
    removeFromFavorite,
    logoutCart,
} = actions;
