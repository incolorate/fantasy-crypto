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
      console.log(action.payload.coin);
      let coinType = action.payload.coin;
      let amountBought = action.payload.amountBought;
      state.wallet[coinType] =
        Number(state.wallet[coinType] || 0) + Number(amountBought);
    },
    updateUsd(state, action) {
      state.wallet.USD = state.wallet.USD - action.payload;
    },
    sellCrypto(state, action) {
      state.userName = "blah";
    },
  },
});

export const { buyCrypto, sellCrypto, updateUsd } = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
