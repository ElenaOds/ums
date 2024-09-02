import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';

const Dashboard = lazy(() => import('./pages/dashboard/DashboardPage'));
const Users = lazy(() => import('./pages/usersPage/UsersPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element ={<Navigate to="dashboard"/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users/>}/>
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
