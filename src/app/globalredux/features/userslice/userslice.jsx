//counterSlice.jsx

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
    userDataObj : {}
    
};

export const userSlice = createSlice({
  name: "userslice",
  initialState,
  reducers: {
    setUser: (state,payload) => {

      state.userDataObj = payload.payload

    },

    

  },
});

export const { setUser } = userSlice.actions

export default userSlice.reducer;
