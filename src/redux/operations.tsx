import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

import { getItems } from '../api/usersApi';
import { User, FetchError } from '../types';

export const getUsers = createAsyncThunk<User[], void, { rejectValue: FetchError }> ('users/get', async (_, thunkAPI) => {
    try {
      const { data } = await getItems();
      return data;
    } catch (error: any) {
      toast.error('Users cannot be displayed');
      return thunkAPI.rejectWithValue(error.message);
    }
  });