import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    favorites : []
};

const FavoritesSlice = createSlice({
    name:"FavoritesSlice",
    initialState,
    reducers : {
        toggleFavorite : (state,action)=>{  // this reducer will toggle favorites products 
            {state.favorites.includes(action.payload) ? state.favorites.splice((item)=>{state.favorites.findIndex(action.payload)},1) : state.favorites.push(action.payload)}
        },
    }
})


export default FavoritesSlice.reducer;
export const {toggleFavorite} = FavoritesSlice.actions;