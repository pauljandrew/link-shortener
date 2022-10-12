import { configureStore } from '@reduxjs/toolkit';
import shortenerFieldReducer from '../features/shortener-field/shortenerFieldSlice';

export const store = configureStore({
  reducer: {
    shortenerField: shortenerFieldReducer,
  },
});
