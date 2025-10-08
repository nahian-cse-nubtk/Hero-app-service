import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {

    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;