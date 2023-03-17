import { configureStore } from "@reduxjs/toolkit";
import { buyCrypto, sellCrypto, userSliceReducer } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});

export { store, sellCrypto, buyCrypto };
