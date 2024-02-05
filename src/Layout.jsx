import React from 'react';
import Header from './components/HEADER/Header';
import Footer from './components/FOOTER/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
        <Header />
           <Outlet /> 
        <Footer />
        </div>
    );
}

export default Layout;