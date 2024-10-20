// DashboardLayout.js
import React from 'react';
import TopNavBar from './TopNavBar';
import SideNavBar from './SideNavBar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Side Nav Bar */}
      <SideNavBar />

      {/* Main Content Area */}
      <div className="flex-1 ">
        {/* Top Nav Bar */}
        <TopNavBar />
        
        {/* Main Dashboard Content (children) */}
        <div className="pt-20 px-8 ml-64">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
