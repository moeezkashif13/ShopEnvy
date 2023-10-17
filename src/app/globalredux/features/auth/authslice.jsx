import { createSlice } from "@reduxjs/toolkit";




const initialState = {
  isAuth: false,
  jid: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setJid: (state, action) => {
      state.jid = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, setJid } = authSlice.actions;

export const authReducer = authSlice.reducer;
