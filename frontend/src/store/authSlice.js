import { createSlice } from "@reduxjs/toolkit";


const t = localStorage.getItem('token');

const initialState = {
    isAuthenticated: false,
    token: t || null,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action)=> {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logout: (state) =>{
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
        }
    }

})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;