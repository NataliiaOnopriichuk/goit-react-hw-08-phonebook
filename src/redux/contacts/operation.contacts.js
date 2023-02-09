// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchAll",
//   async (search, {rejectWithValue}) => {
//     try {
//       const {data} = await axios.get("/contacts",   {params: {search}});
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (obj, {rejectWithValue}) => {
//     try {
//         const {data} = await axios.post("/contacts",  obj );
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (id, {rejectWithValue}) => {
//     try {
//       await axios.delete(`/contacts/${id}`);
//       return id;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactService, deleteContactService, getContacts } from 'service/contactsApi/contactsApi';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (search, { rejectWithValue }) => {
    try {
      return await getContacts(search);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      return await addContactService(body);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContactService(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
