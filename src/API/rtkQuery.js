import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookingApi = createApi({
    reducerPath: 'bookingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:300' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users',
        }),
        newUser: builder.mutation({
            query: (user) => ({
                url: 'users',
                method: 'POST',
                body: user,
            }),

        }),
        bookings: builder.query({
            query: ()=> "/bookings"
        }),
        addbooking: builder.mutation({
            query: (booking) => ({
                url: "/bookings",
                method: "POST",
                body: booking,
            })
        }),
        putbooking: builder.mutation({
            query: (booking) => ({
                url: `/rooms/${booking.id}`,
                method: 'PUT',
                body: booking
            })
        }),
        removeBooking: builder.mutation({
            query: (id) => ({
                url: `/bookings/${id}`,
                method: 'DELETE',
            })
        }),

    }),

});

export const { useGetUsersQuery, useNewUserMutation, useBookingsQuery,  useAddbookingMutation, usePutbookingMutation, useRemoveBookingMutation, } = bookingApi;