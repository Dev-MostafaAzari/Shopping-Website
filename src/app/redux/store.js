import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/app/redux/features/filterSlice";
import AllProductsReducer from "@/app/redux/features/allProducsSlice";

export const store = configureStore({
    reducer:{
        filterProduct : filterReducer,
        AllProducts :  AllProductsReducer,
    }
});