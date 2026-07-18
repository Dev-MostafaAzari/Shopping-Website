import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    skip:0,
}
const AllProductsSlice = createSlice({
    name:"AllProductsSlice",
    initialState , 
    reducers : {
        nextPage : (state) => {
            state.skip += 10;
        },
        prevPage : (state) => {
            state.skip -=10
        }
    }
})

export default AllProductsSlice.reducer;
export const {nextPage , prevPage} = AllProductsSlice.actions;
