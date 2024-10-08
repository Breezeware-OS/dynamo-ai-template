import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';


const store = configureStore({
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  reducer: {
  
  },
});

export default store;
