import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice/slice';
import { contactsApi } from './contactsSliceRTK/contactsSliceRTK';
import authReducer from './auth/Slice';

const rootReduser = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  auth: authReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
