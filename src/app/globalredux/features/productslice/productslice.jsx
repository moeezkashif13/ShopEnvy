//counterSlice.jsx

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart: [],
  
  changes : {changeInQuantity:'initial',changeInSize:'initial'},
  productRelated : {selectedQuantity:1,selectedSize:'S'}

};

export const productSlice = createSlice({
  name: "productslice",
  initialState,
  reducers: {
    setChanges: (state,payload) => {

      state.changes = {...state.changes,...payload.payload}

    },

    finalSelection : (state,payload)=>{

      state.productRelated = {...state.productRelated,...payload.payload}

    }


  },
});

export const { setChanges,finalSelection } = productSlice.actions

export default productSlice.reducer;
