import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coinsApi = createApi({
  reducerPath: "coins",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.coingecko.com/api/v3/` }),
  endpoints: (builder) => ({
    getTrendingCoins: builder.query({
      query: () => "search/trending",
    }),
  }),
});

export const { useGetTrendingCoinsQuery } = coinsApi;
