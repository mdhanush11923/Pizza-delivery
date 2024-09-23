import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar'; // Adjust the import paths as needed
import { Link } from '@nextui-org/react';
import Cart from './Cart';

const Layout = ({ darkMode, changeMode }) => (
  <div className="h-full">
    <Topbar condition={darkMode} onSwitch={changeMode} />
    <Outlet />
    <Cart></Cart>
    <footer className="flex flex-col home-footer w-full h-40 mt-16 gap-2 p-10 sm:h-60 bg-myhouseblue opacity-85 justify-center text-center items-center">
      <p className="text-white">
        &copy; 2024 PIZzA Delivery. All rights reserved.
      </p>
      <Link color='warning' className='font-poppins' href='#'>Terms and conditions</Link>
    </footer>
  </div>
);

export default Layout;
