import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [showSideBar, setShowSideBar] = useState(true);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="relative flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar showSideBar={showSideBar} />
      <div className=" flex-1 w-[95%] overflow-auto bg-[#f9fafb]">
        <Header showSideBar={showSideBar} toggleSideBar={toggleSideBar} />
        <div className="w-[94%] ml-[6rem] p-1 min-h-0 overflow-x-hidden mt-28">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
