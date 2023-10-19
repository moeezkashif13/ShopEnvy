"use client";
import { applyMiddleware, combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

import { persistReducer } from "redux-persist";

import { authReducer } from "./features/auth/authslice";

import cartReducer from './features/cart/cartSlice'

import storage from "./customStorage";

import localStorage from 'redux-persist/lib/storage'

import {createStateSyncMiddleware, initMessageListener} from "redux-state-sync";

const reduxStateSyncConfig = {};




const authPersistConfig = {
  key: "auth",
  // storage: storage,
  storage : localStorage,

  whitelist: ["isAuth", "jid"],
};

const cartPersistConfig = {
  key: "usercart",
  // storage: storage,
  storage : localStorage,

  whitelist: ["cart"]
};


const counterPersistConfig = {
  key: "counter",
  // storage: storage,
  storage : localStorage,
  whitelist: ["value",]
};



const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer,),

  counter: persistReducer(counterPersistConfig, counterReducer),

  usercart: persistReducer(cartPersistConfig, cartReducer),

  
  // counter: counterReducer,
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createStateSyncMiddleware(reduxStateSyncConfig)),


  // middleware: [applyMiddleware(createStateSyncMiddleware(reduxStateSyncConfig))]


 });

 initMessageListener(store);