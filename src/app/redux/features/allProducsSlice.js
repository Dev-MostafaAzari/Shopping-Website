import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    skip:0,
    currentPage:0,  // saving ActivePageOnPagination
}
const AllProductsSlice = createSlice({
    name:"AllProductsSlice",
    initialState , 
    reducers : {
        nextPage : (state) => {
            state.skip += 15;   // products limit on every page is 15
            state.currentPage +=1;
        },
        prevPage : (state) => {
            state.skip -=15
            state.currentPage -=1;
        },
        setPage : (state,action)=>{
            state.skip = action.payload * 15;   // for selecting page number directily
            state.currentPage = action.payload;
        }
    }
})

export default AllProductsSlice.reducer;
export const {nextPage , prevPage , setPage} = AllProductsSlice.actions;
