import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentLayout from '@/layouts/StudentLayout';
import Dashboard from '@/features/student/pages/Dashboard';
import Courses from '@/features/student/pages/Courses';
import Assignments from '@/features/student/pages/Assignments';
import Grades from '@/features/student/pages/Grades';
import Profile from '@/features/shared/pages/Profile';

const StudentRoutes: React.FC = () => {
  return (
    <StudentLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </StudentLayout>
  );
};

export default StudentRoutes;