import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../feaatures/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
})

export default store;