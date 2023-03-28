import {  configureStore } from '@reduxjs/toolkit';
import cartReducer from './Feature/Cart/CartSlice';

export const Store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});