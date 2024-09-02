import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import usersSlice from './usersSlice';

const rootReducer = combineReducers({
    users: usersSlice.reducer,
  })

  const store = configureStore({
    reducer: rootReducer,
  })
  
  export type AppDispatch = typeof store.dispatch
  export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store;