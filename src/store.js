import {  configureStore } from '@reduxjs/toolkit';
import cartReducer from './Feature/Cart/CartSlice';
import modalReducer from './Feature/Cart/Modal/ModalSlice'

export const Store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
});