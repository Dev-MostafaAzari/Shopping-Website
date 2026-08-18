import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userLogedIn:false,
    loading:false,
    userData:null,
    errorMessage:""
}

const loginUser = createAsyncThunk("userAuth/loginUser",async({username,password})=>{
    try{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_PRODUCTS_API_URL}/auth/login`,{username,password});
        console.log(response);
        return response.data;
    }catch(error){
        console.log(error.response?.data)
    }
})

const AuthUser = createSlice({
    name:"userAuth",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,(state)=>{
            state.loading = true;
        }),
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.userData = action.payload;
            state.loading = false;
        }),
        builder.addCase(loginUser.rejected,(state,action)=>{
            state.loading = false;
        })
    }
})


export default AuthUser.reducer;
export {loginUser};
