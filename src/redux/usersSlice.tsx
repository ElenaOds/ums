import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from './operations';
import { User } from '../types';


interface UsersState {
    data: User[];
    isLoading: false | true;
    error: string | null;
  }
  
  const initialState: UsersState = {
    data: [],
    isLoading: false,
    error: null
  };


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
      .addCase(getUsers.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        // state.data = [...action.payload.users];
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      })
    
});

export default usersSlice;