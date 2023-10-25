"use client";
import { applyMiddleware, combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

import { persistReducer } from "redux-persist";

import { PERSIST, PURGE } from 'redux-persist/es/constants';


import { authReducer } from "./features/auth/authslice";

import cartReducer from './features/cart/cartSlice'

import productReducer from './features/productslice/productslice'

import userReducer from './features/userslice/userslice'



import localStorage from "./customStorage";
import { createStateSyncMiddleware } from "redux-state-sync";

// import localStorage from 'redux-persist/lib/storage'

// import localStorage from '@react-native-async-storage/async-storage';

// import {createStateSyncMiddleware, initMessageListener} from "redux-state-sync";

const reduxStateSyncConfig = {
  blacklist: [PERSIST, PURGE,'persist/REHYDRATE'],
  channel: 'my_broadcast_channel',

};





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

const productSlicePersistConfig = {
  key: "productslice",
  // storage: storage,
  storage : localStorage,

  whitelist: ["config","changes","productRelated"]
};


const userSlicePersistConfig = {
  key: "userslice",
  // storage: storage,
  storage : localStorage,

  whitelist: ["userDataObj"]
};


const counterPersistConfig = {
  key: "counter",
  // storage: storage,
  storage : localStorage,
  whitelist: ["value"]
};



const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer,),

  counter: persistReducer(counterPersistConfig, counterReducer),

  usercart: persistReducer(cartPersistConfig, cartReducer),

  productRelated : persistReducer(productSlicePersistConfig,productReducer),


  userRelated : persistReducer(userSlicePersistConfig,userReducer)
  
  // counter: counterReducer,
  //add all your reducers here
},);

const checkingStateSync = [createStateSyncMiddleware(reduxStateSyncConfig)]

export const store = configureStore({
  reducer: rootReducer,

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}).concat(createStateSyncMiddleware(reduxStateSyncConfig)),

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}).concat(...checkingStateSync),

  

  // middleware: [applyMiddleware(createStateSyncMiddleware(reduxStateSyncConfig))]


 });

//  initMessageListener(store);