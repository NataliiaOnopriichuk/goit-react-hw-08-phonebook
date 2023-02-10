import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { contactsReducer } from './contacts/cotactsSlice';
import { filterReducer } from './filter/filterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
    whitelist: ["token"]
}
 
const authPersistedReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authPersistedReducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);