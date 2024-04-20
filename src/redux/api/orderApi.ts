import { baseApi } from "./baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    orderProduct: build.mutation({
      query: (data) => ({
        url: `/order`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addToCart"],
    }),
    getAllOrder: build.query({
      query: () => ({
        url: `/order`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    getUserOrder: build.query({
      query: (email) => ({
        url: `/order/${email}`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    deliveredProduct: build.mutation({
      query: (data) => ({
        url: `/delivered/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useOrderProductMutation, useGetAllOrderQuery, useGetUserOrderQuery, useDeliveredProductMutation } = productApi;
