import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: (_, action) => {
      return { filter: action.payload };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
