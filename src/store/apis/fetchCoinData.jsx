import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coinsApi = createApi({
  reducerPath: "coins",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.coingecko.com/api/v3/` }),
  endpoints: (builder) => ({
    getTrendingCoins: builder.query({
      query: () => "search/trending",
    }),
    getCoinData: builder.query({
      query: (coin) => `coins/${coin}`,
    }),
  }),
});

export const { useGetTrendingCoinsQuery, useGetCoinDataQuery } = coinsApi;
