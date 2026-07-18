import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    skip:0,
}
const AllProductsSlice = createSlice({
    name:"AllProductsSlice",
    initialState , 
    reducers : {
        nextPage : (state) => {
            state.skip += 15;
        },
        prevPage : (state) => {
            state.skip -=15
        },
        setPage : (state,action)=>{
            state.skip = action.payload * 15;
        }
    }
})

export default AllProductsSlice.reducer;
export const {nextPage , prevPage , setPage} = AllProductsSlice.actions;
