import { createAsyncThunk } from '@reduxjs/toolkit';
// import { token } from 'http';
import {  loginUserApi, registerUserApi } from 'service/authApi/authApi';


export const registerUser = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(body);
    //   token.set(data.token);
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
    //   token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const getCurUser = createAsyncThunk(
//   'auth/current',
//   async (body, { rejectWithValue }) => {
//     try {
//       const data = await loginUserApi(body);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
