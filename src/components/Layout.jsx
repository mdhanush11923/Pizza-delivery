import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar'; // Adjust the import paths as needed
import { Link } from '@nextui-org/react';

const Layout = ({ darkMode, changeMode }) => (
  <div className="h-full">
    <Topbar condition={darkMode} onSwitch={changeMode} />
    <Outlet />
    <footer className="flex flex-col home-footer w-full h-40 gap-2 sm:h-60 bg-myhouseblue justify-center text-center items-center">
      <p className="text-[#e4e4e4]">
        &copy; 2024 PIZzA Delivery. All rights reserved.
      </p>
      <Link color='warning' className='font-poppins' href='#'>Terms and conditions</Link>
    </footer>
  </div>
);

export default Layout;
