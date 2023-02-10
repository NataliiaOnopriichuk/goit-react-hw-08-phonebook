import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from './operation.auth';

const authInitialState = {
  token: null,
  isLoading: false,
  error: null,
  user: {
    email: '',
    name: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isAuth: true,
        };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isAuth: true,
        };
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          user: { ...payload },
          isAuth: true,
        };
      })
      .addCase(logoutUser.fulfilled, () => {
        return authInitialState;
      })
      .addMatcher(
        action =>
          action.type.startsWith('auth/') && action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('auth/') && action.type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('auth/') && action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
