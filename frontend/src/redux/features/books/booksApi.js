import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/getBaseUrl'

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/books`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            Headers.set('Authorization', `Bearer ${token}`);
        }
        return Headers;
    }
})

const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery,
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: () => "/",
            providedTags: ['Books']
        }),
        fetchOneBook: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{type: 'Books', id}]
        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: `/create-book`,
                method: "POST",
                body: newBook
            }),
            invalidTags: ["Books"]
        }),
        updateBook: builder.mutation({
            query: (id, ...newdata) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: newdata,
                headers: {
                    'Content-Type':'application/json'
                }
            }),
            invalidTags: ['Books']
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidTags: ["Books"]
        })
    })
})

export const { useFetchAllBooksQuery, useFetchOneBookQuery, useUpdateBookMutation, useAddBookMutation, useDeleteBookMutation } = booksApi;
export default booksApi;