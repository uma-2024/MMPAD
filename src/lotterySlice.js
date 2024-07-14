import { createSlice } from '@reduxjs/toolkit';

export const lotterySlice = createSlice({
  name: 'lottery',
  initialState: {
    data: []
  },
  reducers: {
    // Add or Update
    addOrUpdateLotteryEntry: (state, action) => {
      const { id } = action.payload;
      const index = state.data.findIndex(entry => entry.id === id);
      if (index !== -1) {
        // Update existing entry
        state.data[index] = { ...state.data[index], ...action.payload };
      } else {
        // Add new entry
        state.data.push(action.payload);
      }
    },
    // Delete
    deleteLotteryEntry: (state, action) => {
      state.data = state.data.filter(entry => entry.id !== action.payload);
    }
  }
});

export const { addOrUpdateLotteryEntry, deleteLotteryEntry } = lotterySlice.actions;

export default lotterySlice.reducer;
