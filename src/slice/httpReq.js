import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { useDispatch } from 'react-redux';
import { getRestaurants } from '../api/api';

const initialState = {
  data: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const asyncAPICall = createAsyncThunk(
  'data/fetchData',
  async apiCall => {
    return await axios[apiCall.method](apiCall.endpoint, apiCall?.payload);
  }
);

export const httpReq = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setInitialState: (state, action) => {
      console.log('26 cleaning the store data');
      state.data = null;
      state.isLoading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(asyncAPICall.pending, state => {
        console.log('pending');
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(asyncAPICall.fulfilled, (state, action) => {
        console.log('fulfilled', action.payload.data);
        state.data = action.payload.data;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(asyncAPICall.rejected, (state, action) => {
        console.log('error', action.error);
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export const selectData = state => state.data.data;
export const selectIsLoading = state => state.data.isLoading;
export const selectIsSuccess = state => state.data.isSuccess;
export const selectIsError = state => state.data.isError;

export default httpReq.reducer;
export const { setInitialState } = httpReq.actions;
