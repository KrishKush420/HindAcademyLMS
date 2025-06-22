import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';
import Dashboard from '@/features/admin/pages/Dashboard';
import Users from '@/features/admin/pages/Users';
import Courses from '@/features/admin/pages/Courses';
import Analytics from '@/features/admin/pages/Analytics';
import Settings from '@/features/admin/pages/Settings';
import Profile from '@/features/shared/pages/Profile';

const AdminRoutes: React.FC = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;