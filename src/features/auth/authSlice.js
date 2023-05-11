import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    logging: false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.logging = true
        },
        loginSuccess: (state, action) => {
            state.logging = false;
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        loginFailed: (state, action) => {
            state.logging = false;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        }
    }
})

export const authActions = authSlice.actions;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const logging = state => state.auth.logging;

export default authSlice.reducer;