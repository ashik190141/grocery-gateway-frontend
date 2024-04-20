import { baseApi } from "./baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addToCartProduct: build.mutation({
      query: (data) => ({
        url: `/addToCart`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addToCart"],
    }),
    getAllCarts: build.query({
      query: (email) => ({
        url: `/addToCart/${email}`,
        method: "GET",
      }),
      providesTags: ["addToCart"],
    }),
  }),
});

export const {
    useAddToCartProductMutation,
    useGetAllCartsQuery
} = productApi;
