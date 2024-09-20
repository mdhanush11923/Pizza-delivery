import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar'; // Adjust the import paths as needed

const Layout = ({ darkMode, changeMode }) => (
  <div>
    <Topbar condition={darkMode} onSwitch={changeMode} />
    <Outlet />
  </div>
);

export default Layout;
