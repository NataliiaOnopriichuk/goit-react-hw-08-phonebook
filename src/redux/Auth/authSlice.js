import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './operation.auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    token: null,
    // localId: null,
    // refreshToken: null,
    isLoading: false,
    error: null,
    user: {
      email: '',
      name: '',
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        console.log('payload :>> ', payload);
        console.log('state :>> ', state);
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
