import React from 'react';
import { SidebarLayout } from '@/layouts/SidebarLayout';
import AdminSidebar from '@/components/AdminSidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div data-role="admin">
      <SidebarLayout sidebar={<AdminSidebar />}>
        {children}
      </SidebarLayout>
    </div>
  );
};

export default AdminLayout;