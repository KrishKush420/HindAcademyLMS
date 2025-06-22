import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FacultyLayout from '@/layouts/FacultyLayout';
import Dashboard from '@/features/faculty/pages/Dashboard';
import Courses from '@/features/faculty/pages/Courses';
import Students from '@/features/faculty/pages/Students';
import Gradebook from '@/features/faculty/pages/Gradebook';
import Profile from '@/features/shared/pages/Profile';

const FacultyRoutes: React.FC = () => {
  return (
    <FacultyLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gradebook" element={<Gradebook />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </FacultyLayout>
  );
};

export default FacultyRoutes;