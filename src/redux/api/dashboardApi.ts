import { baseApi } from "./baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserInfo: build.query({
      query: ({ userRole, user }: { userRole: string; user: string }) => ({
        url: `/dashboard/${userRole}/${user}`,
        method: "GET",
      }),
      providesTags: ["addToCart", "order", "products", "review"],
    }),
  }),
});

export const { useGetUserInfoQuery } = dashboardApi;
