

import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query/react';

import { bookingApi} from './API/rtkQuery';




const store = configureStore({

    reducer: {

        [bookingApi.reducerPath]: bookingApi.reducer,

        




    },

    middleware: (getDefaultMiddleware) =>

        getDefaultMiddleware().concat(bookingApi.middleware),

});




setupListeners(store.dispatch);




export { store };


