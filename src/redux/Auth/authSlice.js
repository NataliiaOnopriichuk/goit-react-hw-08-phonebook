// import { createSlice } from '@reduxjs/toolkit';
// import { addContact, deleteContact, fetchContacts } from './operation.contacts';

// const authInitialState = {
//   i: ''
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: authInitialState,
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.items = payload;
//       })
//       .addCase(addContact.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.items.push(payload);
//       })
//       .addCase(deleteContact.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.items = state.items.filter(el => el.id !== payload);
//       })
//       .addMatcher(
//         action =>
//           action.type.startsWith('contacts') && action.type.endsWith('pending'),
//         state => {
//           state.isLoading = true;
//         }
//       )
//       .addMatcher(
//         action =>
//           action.type.startsWith('contacts') &&
//           action.type.endsWith('rejected'),
//         (state, { payload }) => {
//           state.isLoading = false;
//           state.error = payload;
//         }
//       );
//   },
// });

// export const authReducer = authSlice.reducer;
