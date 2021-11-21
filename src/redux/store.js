import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { items, loading } from './contact-reducer';
import { filter } from './filter/ContactFilterReducer';

const rootReducer = combineReducers({
  items,
  filter,
  loading,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});
