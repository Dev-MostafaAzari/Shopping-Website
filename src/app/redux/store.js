import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/app/redux/features/filterSlice";

export const store = configureStore({
    reducer:{
        filteProduct : filterReducer,
    }
});