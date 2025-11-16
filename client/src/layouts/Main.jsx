import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
        {/* Navbar */}
        <Navbar />
        {/* Outlet */}
        <Outlet />
        {/* Footer */}
    </div>
  )
}

export default Main;