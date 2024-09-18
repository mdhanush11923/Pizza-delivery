import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar'; // Adjust the import paths as needed

const Layout = ({ darkMode, changeMode }) => (
  <main className={`${darkMode ? 'dark' : ''} text-foreground bg-background`}>
    <Topbar condition={darkMode} onSwitch={changeMode} />
    <Outlet /> {/* This will render the nested routes */}
  </main>
);

export default Layout;
