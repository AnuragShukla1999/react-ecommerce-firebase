import { createSlice } from "@reduxjs/toolkit";


const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];
console.log(initialState);


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTocart(state, action) {
            state.push(action.payload)
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id != action.payload.payload.id);
        },
        incrementQuantity: (state, action) => {
            state = state.map(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                }
                return item;
            });
        },


        decrementQuantity: (state, action) => {
            return state.map(item => {
                if (item.id ===action.payload && item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                }

                return item;
            });
        }
    }
})


export const { addTocart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;


export default cartSlice.reducer;