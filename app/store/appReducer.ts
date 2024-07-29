import {combineReducers} from "redux";
import {productSlice} from "@/entities/category";

export const rootReducer = combineReducers({
    products: {
        productSlice: productSlice
    }
});