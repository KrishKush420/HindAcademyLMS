import React from 'react';
import { SidebarLayout } from '@/layouts/SidebarLayout';
import FacultySidebar from '@/components/FacultySidebar';

interface FacultyLayoutProps {
  children: React.ReactNode;
}

const FacultyLayout: React.FC<FacultyLayoutProps> = ({ children }) => {
  return (
    <div data-role="faculty">
      <SidebarLayout sidebar={<FacultySidebar />}>
        {children}
      </SidebarLayout>
    </div>
  );
};

export default FacultyLayout;