import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookingApi = createApi({
    reducerPath: 'bookingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3007' }),
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
        rooms: builder.query({
            query: () => '/rooms'
        }),
        addrooms: builder.mutation({
            query: (room) => ({
                url: "/rooms",
                method: "POST",
                body: room,
            })
        }),
        putroom: builder.mutation({
            query: (room) => ({
                url: `/rooms/${room.id}`,
                method: 'PUT',
                body: room
            })
        }),
        removeRoom: builder.mutation({
            query: (id) => ({
                url: `/rooms/${id}`,
                method: 'DELETE',
            })
        }),
        takeusers : builder.query({
            query: () => "/users"
        }),
        addusers : builder.mutation({
            query: (user) => ({
                url: "/users",
                method:"POST",
                body: user
            })
        }),
        putuser : builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'PUT',
                body: user
            })
        }),
        removeUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            })
        }),
        getroombookings: builder.query ({
            query:() => "/userBookings"
        }),
        userbookings : builder.mutation({
            query: (roombooking) => ({
                url: `/userBookings`,
                method: 'POST',
                body: roombooking
            })
        }),

    }),

});

export const { useGetUsersQuery, useNewUserMutation, useBookingsQuery,  useAddbookingMutation, usePutbookingMutation, useRemoveBookingMutation, useRoomsQuery,
    useAddroomsMutation, usePutroomMutation, useRemoveRoomMutation, useTakeusersQuery, useAddusersMutation, usePutuserMutation, useRemoveUserMutation, useGetroombookingsQuery, useUserbookingsMutation  } = bookingApi;