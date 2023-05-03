import { configureStore } from '@reduxjs/toolkit';
import httpReq from './slice/httpReq';
import userData from './slice/userData';

export const store = configureStore({
  reducer: {
    userData,
    httpReq,
  },
});
