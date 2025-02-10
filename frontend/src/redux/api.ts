import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API slice
export const api = createApi({
  reducerPath: 'api', // Unique key for the reducer
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com/' }), // Base URL
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `users/${id}`,
    }),
    getPosts: builder.query({
      query: () => 'posts',
    }),
  }),
});

// Export hooks for usage in components
export const { useGetUserQuery, useGetPostsQuery } = api;