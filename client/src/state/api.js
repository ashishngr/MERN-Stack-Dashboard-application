import {createApi, fetchBaseQuery}  from "@reduxjs/toolkit/query/react";


export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl : "http://localhost:5001"}),
    reducerPath : "adminApi",
    tagTypes: ["User"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getProducts: build.query({
            query: () => "client/products",
            providesTags: ["Products"]
        }),
        getCustomers: build.query({
            query: () => "client/customers",
            providesTags: ["customers"]
        })
    })
});

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery
} = api