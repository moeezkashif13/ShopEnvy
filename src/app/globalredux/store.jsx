"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

import { persistReducer } from "redux-persist";

import { authReducer } from "./features/auth/authslice";

import cartReducer from './features/cart/cartSlice'

import storage from "./customStorage";


const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["isAuth", "jid"],
};

const cartPersistConfig = {
  key: "usercart",
  storage: storage,
  whitelist: ["cart"]
};


const counterPersistConfig = {
  key: "counter",
  storage: storage,
  whitelist: ["value",]
};



const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),

  counter: persistReducer(counterPersistConfig, counterReducer),

  usercart: persistReducer(cartPersistConfig, cartReducer),

  
  // counter: counterReducer,
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

 });

