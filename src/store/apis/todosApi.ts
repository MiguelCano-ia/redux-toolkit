import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// createApi nos genera custom hooks para peticiones HTTP
export const todosApi = createApi({

  reducerPath: "todosApi",

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),

  endpoints: ( builder ) => ({
    getTodos: builder.query({
      query: () => '/todos',
    }),
    getTodo: builder.query({
      query: ( todoId ) => `/todos/${ todoId }`,
    }),
  })
});

export const { useGetTodosQuery, useGetTodoQuery, } = todosApi;