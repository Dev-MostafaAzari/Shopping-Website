import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites :[], 
    start:0,
    end:9,
    activePage:0,
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
        },
        setFavPage : (state,action)=>{
            state.start = action.payload*10;
            state.end = (action.payload*10)+9;
            state.activePage = action.payload;
        },
        setFavorites : (state,action)=>{
            state.favorites = action.payload;
        }
    }
})


export default FavoritesSlice.reducer;
export const {AddFavorite,removeFavorite,setFavPage,setFavorites} = FavoritesSlice.actions;