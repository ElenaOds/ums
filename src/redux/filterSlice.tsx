import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from '../types';

const filterInitialState: FilterState = {
  name: '',
  userName: '',
  email: '',
  phone: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action: PayloadAction<Partial<FilterState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice;