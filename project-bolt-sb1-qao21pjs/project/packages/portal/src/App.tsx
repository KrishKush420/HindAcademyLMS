import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/AuthProvider';
import AuthPage from '@/pages/AuthPage';
import AppRouter from '@/routes/AppRouter';
import { Spinner } from '@hind-lms/design-system';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Spinner size="lg" />
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/auth" element={user ? <Navigate to="/" replace /> : <AuthPage />} />
      <Route path="/*" element={user ? <AppRouter /> : <Navigate to="/auth" replace />} />
    </Routes>
  );
}

export default App;