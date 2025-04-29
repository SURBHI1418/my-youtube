import { createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice({
    name: "app",
    initialState:{
        isMenuOpen: true,
    },
    reducers:{
        togglerMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        }
    }


})
export const {togglerMenu,closeMenu}=appSlice.actions;
export default appSlice.reducer;