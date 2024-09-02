import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import usersSlice from './usersSlice';
import filterSlice from './filterSlice';

const rootReducer = combineReducers({
    users: usersSlice.reducer,
    filter: filterSlice.reducer,
  })

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  
  export const useAppDispatch = () => useDispatch<AppDispatch>()
  export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector 

export default store;