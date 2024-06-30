
import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state[itemIndex].quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        deleteFromCart(state, action) {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                if (state[itemIndex].quantity > 1) {
                    state[itemIndex].quantity -= 1;
                } else {
                    return state.filter(item => item.id !== action.payload.id);
                }
            }
        }
    }
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;






















// import { createSlice } from '@reduxjs/toolkit'
// const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];
// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action) {
//             state.push(action.payload)
//         },
//         deleteFromCart(state, action) {
//             return state.filter(item => item.id != action.payload.id);
//         }
//     }
// })
// export const { addToCart, deleteFromCart } = cartSlice.actions
// export default cartSlice.reducer;