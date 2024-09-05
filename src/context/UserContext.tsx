import { createContext, useContext, useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '../redux/store';
import { getUsers } from '../redux/operations';
import { User } from '../types';

interface UserContextProps {
  users: User[];
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();
  const users = useTypedSelector((state) => state.users.data);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <UserContext.Provider value={{ users }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};