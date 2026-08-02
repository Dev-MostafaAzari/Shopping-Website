import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    favorites : []
};

const FavoritesSlice = createSlice({
    name:"FavoritesSlice",
    initialState,
    reducers : {
        AddFavorite : (state,action)=>{  // this reducer will toggle favorites products 
            state.favorites.push(action.payload)
        },
        removeFavorite : (state,action)=>{
            state.favorites.splice(state.favorites.findIndex(item => item.id === action.payload.id),1)
        }
    }
})


export default FavoritesSlice.reducer;
export const {AddFavorite,removeFavorite} = FavoritesSlice.actions;