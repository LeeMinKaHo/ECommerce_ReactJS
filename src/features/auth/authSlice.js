import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    email:""
};


export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        handleLogin(state,action){
            state.email = action.payload
        }
    }
})


export const { handleLogin } = authSlice.actions

export default authSlice.reducer;