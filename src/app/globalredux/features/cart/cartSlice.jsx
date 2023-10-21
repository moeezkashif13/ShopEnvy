//counterSlice.jsx

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart: [],
  
  cart : []

};

export const cartSlice = createSlice({
  name: "usercart",
  initialState,
  reducers: {
    increaseCart: (state,payload) => {

      if(payload.payload.type == 'update'){

        state.cart.forEach(eachItem=>{
        
          if(eachItem.id==payload.payload.finalDataToSend.id){
            eachItem['selectedQuantity'] = payload.payload.finalDataToSend.selectedQuantity
            eachItem['selectedSize'] = payload.payload.finalDataToSend.selectedSize
          }
  
        });


      }else if(payload.payload.type == 'add'){

        console.log(payload.payload);

      state.cart.push(payload.payload.finalDataToSend)


      }
    },


    refreshCart: (state,payload) => {

      state.cart = payload.payload

    },

    updateSingleItemInCart: (state,payload) => {

      
       state.cart.forEach(eachItem=>{
        
        if(eachItem.id==payload.payload.id){
          eachItem['quantity'] = payload.payload.quantity
        }

      });
      

      

    },

  },
});

export const { increaseCart,updateSingleItemInCart,refreshCart } = cartSlice.actions

export default cartSlice.reducer;
