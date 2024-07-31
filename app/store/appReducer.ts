'use client';

import {combineReducers} from "redux";
import productSlice from "@/entities/category";

export const rootReducer = combineReducers({
    product: productSlice,
});