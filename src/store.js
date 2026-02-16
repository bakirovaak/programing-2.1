import {configureStore } from '@reduxjs/toolkit'
import uiReducer from './features/counter/uiSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});