import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-frontend.dev.int.perx.ru/api/' }),
  endpoints: (builder) => ({
    getAllGoods: builder.query({
      query: () => `goods/`
    }),
    getAllGoodsByDealerId: builder.query({
      query: (name: string) => `goods/?dealers=${name}`
    }),
    getAllDealerIds: builder.query({
      query: () => `/dealers`
    })
  })
});

export const { useGetAllDealerIdsQuery, useGetAllGoodsByDealerIdQuery, useGetAllGoodsQuery } =
  productsApi;
