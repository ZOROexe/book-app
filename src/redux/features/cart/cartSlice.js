import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existing = state.cartItems.find((items) => items._id === action.payload._id);
            if (!existing) {
                state.cartItems.push(action.payload);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item added to cart!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Item already exists in cart",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((items) => items._id !== action.payload._id);
        },
        clearCart: (state) => {
            state.cartItems = [];
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;