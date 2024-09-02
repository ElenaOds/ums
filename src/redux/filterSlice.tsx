import { createSlice } from '@reduxjs/toolkit';

interface FilterState {
    filter: string;
  }

const filterInitialState: FilterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
      setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice;