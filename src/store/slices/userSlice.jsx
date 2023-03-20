import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "incolorate",
    wallet: {
      USD: 1200,
    },
  },
  reducers: {
    buyCrypto(state, action) {
      state.userName = "blah";
    },
    sellCrypto(state, action) {
      state.userName = "blah";
    },
  },
});

export const { buyCrypto, sellCrypto } = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
