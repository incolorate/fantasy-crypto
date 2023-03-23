import { createSlice } from "@reduxjs/toolkit";

let localWallet = JSON.parse(localStorage.getItem("localWallet"));

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "incolorate",
    wallet: localWallet || {
      USD: 5000,
    },
  },
  reducers: {
    updateWalletFromLocalStorage(state, action) {
      state.wallet = action.payload;
    },
    buyCrypto(state, action) {
      let coinType = action.payload.coin;
      let amountBought = action.payload.amountBought;
      state.wallet[coinType] =
        Number(state.wallet[coinType] || 0) + Number(amountBought);
    },
    updateUsd(state, action) {
      state.wallet.USD = state.wallet.USD - action.payload;
    },
    sellCrypto(state, action) {
      let coin = action.payload.coinType;
      let amountOfCoin = action.payload.amountToSell;
      state.wallet[coin] -= Number(amountOfCoin);
      state.wallet.USD += Number(action.payload.valueInUsd);
    },
  },
});

export const {
  buyCrypto,
  sellCrypto,
  updateUsd,
  updateWalletFromLocalStorage,
} = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
