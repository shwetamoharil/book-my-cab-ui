import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState = {
  displayName: '',
  email: '',
  expiresIn: '',
  idToken: '',
  localId: '',
  refreshToken: '',
};

export const userData = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state = action.payload;
    },
    clearData: (state, actions) => {
      state = null;
    },
  },
});

export default userData.reducer;
export const { setUserData, clearData } = userData.actions;
