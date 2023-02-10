import { createAsyncThunk } from '@reduxjs/toolkit';
import { tokenId } from 'http';
import {  getCurrentUserApi, loginUserApi, logoutApi, registerUserApi } from 'service/authApi/authApi';


export const registerUser = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
        const data = await registerUserApi(body);
      tokenId.set(data.token);
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
      tokenId.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'user/getUser',
  async (_, { rejectWithValue }) => {
    try {
      return await getCurrentUserApi();
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
        tokenId.unSet()
      return 
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
