import { baseApi } from "./baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addToCartProduct: build.mutation({
      query: (data) => ({
        url: `/addToCart`,
        method: "PUT",
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
    updateCarts: build.mutation({
      query: (data) => ({
        url: `/addToCart/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["addToCart"],
    }),
  }),
});

export const {
    useAddToCartProductMutation,
  useGetAllCartsQuery,
    useUpdateCartsMutation
} = productApi;
