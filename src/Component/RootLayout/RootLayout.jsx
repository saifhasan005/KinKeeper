import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Homepage from '../Homepage/Homepage';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Homepage></Homepage>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;