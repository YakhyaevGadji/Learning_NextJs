'use client';

import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "@/app/store/appReducer";

const store = configureStore({
    reducer: rootReducer
});

export default store;