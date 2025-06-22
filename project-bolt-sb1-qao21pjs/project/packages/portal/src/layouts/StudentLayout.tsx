import React from 'react';
import { SidebarLayout } from '@/layouts/SidebarLayout';
import StudentSidebar from '@/components/StudentSidebar';

interface StudentLayoutProps {
  children: React.ReactNode;
}

const StudentLayout: React.FC<StudentLayoutProps> = ({ children }) => {
  return (
    <div data-role="student">
      <SidebarLayout sidebar={<StudentSidebar />}>
        {children}
      </SidebarLayout>
    </div>
  );
};

export default StudentLayout;