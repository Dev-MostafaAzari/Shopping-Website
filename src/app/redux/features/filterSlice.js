import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterShow : false
};

const filterSlice = createSlice({
    name:"FilterSlice",
    initialState , 
    reducers:{
        toggleFilter : (state)=>{
            state.filterShow = !state.filterShow;
        },
    }
});

export default filterSlice.reducer;
export const {toggleFilter} = filterSlice.actions;