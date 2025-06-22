import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/AuthProvider';

// Lazy load role-specific routes
const StudentRoutes = React.lazy(() => import('./student/StudentRoutes'));
const FacultyRoutes = React.lazy(() => import('./faculty/FacultyRoutes'));
const AdminRoutes = React.lazy(() => import('./admin/AdminRoutes'));

const AppRouter: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      }
    >
      <Routes>
        {user.role === 'student' && <Route path="/*" element={<StudentRoutes />} />}
        {user.role === 'faculty' && <Route path="/*" element={<FacultyRoutes />} />}
        {user.role === 'admin' && <Route path="/*" element={<AdminRoutes />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRouter;