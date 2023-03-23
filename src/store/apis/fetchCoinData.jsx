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
    getTenCoins: builder.query({
      query: (page) =>
        `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`,
    }),
  }),
});

export const {
  useGetTrendingCoinsQuery,
  useGetCoinDataQuery,
  useGetTenCoinsQuery,
} = coinsApi;
