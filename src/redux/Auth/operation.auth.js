import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurrentUserApi,
  loginUserApi,
  logoutApi,
  registerUserApi,
} from 'service/authApi/authApi';
import { token } from 'utils/http';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) return rejectWithValue();
    token.set(persistedToken);
    try {
      const { data } = await getCurrentUserApi();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutApi();
      token.unset();
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
