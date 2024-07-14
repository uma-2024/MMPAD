import { configureStore } from '@reduxjs/toolkit';
import lotteryReducer from './lotterySlice';

export const store = configureStore({
  reducer: {
    lottery: lotteryReducer,
  },
});
