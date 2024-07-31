'use client';

import {createSlice} from "@reduxjs/toolkit";

interface IInitialState {
    products: number;
}

const initialState: IInitialState = {
    products: 1
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }
})

export const {setProducts} = productSlice.actions;

export default productSlice.reducer;

