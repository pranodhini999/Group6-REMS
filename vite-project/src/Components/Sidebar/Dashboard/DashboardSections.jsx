// DashboardSections.js
import React from 'react';
import DashboardLayout from '../DashboardLayout';

const DashboardSections = () => {
  return (
    <DashboardLayout>
    <div className=" pt-20 px-8 bg-gray-100 min-h-screen">
      <section id="overview" className="py-10">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p>This section provides an overview of the key metrics and performance of the dashboard.</p>
      </section>

      <section id="stats" className="py-10">
        <h2 className="text-3xl font-bold mb-4">Statistics</h2>
        <p>In this section, you will find detailed statistics related to user data and platform usage.</p>
      </section>

      <section id="reports" className="py-10">
        <h2 className="text-3xl font-bold mb-4">Reports</h2>
        <p>This section displays generated reports and analytics for your data.</p>
      </section>

      <section id="settings" className="py-10">
        <h2 className="text-3xl font-bold mb-4">Settings</h2>
        <p>Here you can adjust the settings for your account, preferences, and notifications.</p>
      </section>
    </div>
    </DashboardLayout>
  );
};

export default DashboardSections;
