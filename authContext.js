// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated on app load
    const checkAuthStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('isAdmin');
        setIsAuthenticated(value === 'true');
      } catch (e) {
        console.error('Failed to load auth state');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('isAdmin');
      setIsAuthenticated(false);
    } catch (e) {
      console.error('Failed to logout');
    }
  };

  return (
    <AuthContext.Provider 
      value={{ isAuthenticated, setIsAuthenticated, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};