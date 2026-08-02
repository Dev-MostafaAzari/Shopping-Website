import { createSlice } from "@reduxjs/toolkit";

//geting localStorage Data
const LoadFavorites = ()=>{
    if (typeof window === "undefined")
    {
        return [];
    }
    const {favorites} = JSON.parse(localStorage.getItem("products") || "{}")

    return {
        favorites : favorites || [],
    }
}
const favoritesData = LoadFavorites();  // contains favorite Products

const initialState = {
    favorites : favoritesData.favorites,    // setLocatStorage data 
};

const FavoritesSlice = createSlice({
    name:"FavoritesSlice",
    initialState,
    reducers : {
        AddFavorite : (state,action)=>{  // this reducer will toggle favorites products 
            state.favorites?.push(action.payload)
        },
        removeFavorite : (state,action)=>{
            state.favorites?.splice(state.favorites.findIndex(item => item.id === action.payload.id),1)
        }
    }
})


export default FavoritesSlice.reducer;
export const {AddFavorite,removeFavorite} = FavoritesSlice.actions;