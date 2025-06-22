import React, { useEffect, useState } from 'react';
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';
import { AuthContext, AuthContextType, User } from './AuthContext';

const pool = new CognitoUserPool({
  UserPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID || 'us-east-1_EXAMPLE',
  ClientId: import.meta.env.VITE_COGNITO_CLIENT_ID || 'example-client-id',
});


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const currentUser = pool.getCurrentUser();
      if (currentUser) {
        await new Promise<void>((resolve, reject) => {
          currentUser.getSession((err: Error | null, session: CognitoUserSession | null) => {
            if (err) {
              reject(err);
              return;
            }
            if (session && session.isValid()) {
              const payload = session.getIdToken().payload;
              setUser({
                id: currentUser.getUsername(),
                email: payload.email,
                role: payload['custom:role'] || 'student', // Fallback to student
                name: payload.name || payload.email,
                avatar: payload.picture,
              });
              resolve();
            } else {
              reject(new Error('Invalid session'));
            }
          });
        });
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      // Clear any invalid tokens
      localStorage.clear();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username: email,
        Pool: pool,
      });

      const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (session) => {
          const payload = session.getIdToken().payload;
          setUser({
            id: user.getUsername(),
            email: payload.email,
            role: payload['custom:role'] || 'student',
            name: payload.name || payload.email,
            avatar: payload.picture,
          });
          resolve();
        },
        onFailure: (err) => {
          reject(err);
        },
        newPasswordRequired: () => {
          // Handle new password required scenario
          reject(new Error('New password required'));
        },
      });
    });
  };

  const logout = () => {
    const currentUser = pool.getCurrentUser();
    if (currentUser) {
      currentUser.signOut();
    }
    localStorage.clear();
    setUser(null);
  };

  const refreshToken = async (): Promise<void> => {
    return new Promise((resolve, reject) => {
      const currentUser = pool.getCurrentUser();
      if (!currentUser) {
        reject(new Error('No current user'));
        return;
      }

      currentUser.getSession((err: Error | null, session: CognitoUserSession | null) => {
        if (err) {
          reject(err);
          return;
        }
        
        if (session) {
          const refreshToken = session.getRefreshToken();
          currentUser.refreshSession(refreshToken, (refreshErr) => {
            if (refreshErr) {
              reject(refreshErr);
            } else {
              resolve();
            }
          });
        } else {
          reject(new Error('No session found'));
        }
      });
    });
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    logout,
    refreshToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};