import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userLogedIn:false,
    loading:false,
    loginCode:null,
    errorMessage:""
}

const loginUser = createAsyncThunk("userAuth/loginUser",async({username,password})=>{
    const response = await axios.post(`${process.env.NEXT_PUBLIC_PRODUCTS_API_URL}/auth/login`,{username,password});
    console.log(response);
    return response.data.accessToken;
})
const AuthUser = createSlice({
    name:"userAuth",
    initialState,
    reducers:{
        userLogOut : (state)=>{
            state.userLogedIn = false;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,(state)=>{
            state.loading = true;
            state.userLogedIn = false;
        }),
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.loginCode = action.payload;
            state.loading = false;
            state.userLogedIn = true;
        }),
        builder.addCase(loginUser.rejected,(state,action)=>{
            state.loading = false;
            state.userLogedIn = false;
            state.errorMessage = action.error.message;
        })
    }
})


export default AuthUser.reducer;
export const {userLogOut} = AuthUser.actions;
export {loginUser};
