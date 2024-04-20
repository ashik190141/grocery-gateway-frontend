import { baseApi } from './baseApi';


export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    deleteProducts: build.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    getSingleProduct: build.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    updateProducts: build.mutation({
      query: (data) => ({
        url: `/product/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["products"],
    })
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery, useDeleteProductsMutation, useUpdateProductsMutation } = productApi