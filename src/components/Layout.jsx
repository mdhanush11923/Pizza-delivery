import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar'; // Adjust the import paths as needed
import { Link } from '@nextui-org/react';
import Cart from './Cart';
import Footer from './Footer';

const Layout = ({ darkMode, changeMode }) => (
  <div className="h-full">
    <Topbar condition={darkMode} onSwitch={changeMode} />
    <Outlet />
    <Cart darkMode={darkMode}></Cart>
    <Footer />
  </div>
);

export default Layout;
