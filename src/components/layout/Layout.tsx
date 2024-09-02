import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sidebar from '../sidebar/Sidebar';
import Loader from '../loader/Loader';
import Header from '../header/Header';

import { Main } from './Layout.styled';

const Layout = () => {
  return (
    <div>
    <Sidebar />
    <Header />
    <Main>
     <Suspense fallback={<Loader />}> 
        <Outlet />
     </Suspense> 
     <ToastContainer autoClose={3000} theme="colored"/>
    </Main>
</div>
  )
}

export default Layout
