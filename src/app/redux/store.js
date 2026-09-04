import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/app/redux/features/filterSlice";
import AllProductsReducer from "@/app/redux/features/allProducsSlice";
import FavoritesReducer from "@/app/redux/features/favoritesSlice";
import AuthUserReducer from "@/app/redux/features/authenticationSlice";

export const store = configureStore({
    reducer:{
        filterProduct : filterReducer,
        AllProducts :  AllProductsReducer,
        FavoriteProducts : FavoritesReducer,
        AuthenticationUser : AuthUserReducer,
    }
});

//localStorage
store.subscribe(()=>{
    const {favorites} = store.getState().FavoriteProducts;
    localStorage.setItem("products",JSON.stringify({favorites}));
    const {userLogedIn} = store.getState().AuthenticationUser;
    localStorage.setItem("userAuth",JSON.stringify({userLogedIn}));
})