import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/app/redux/features/filterSlice";
import AllProductsReducer from "@/app/redux/features/allProducsSlice";
import FavoritesReducer from "@/app/redux/features/favoritesSlice";

export const store = configureStore({
    reducer:{
        filterProduct : filterReducer,
        AllProducts :  AllProductsReducer,
        FavoriteProducts : FavoritesReducer,
    }
});