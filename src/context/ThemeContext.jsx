'use client'

import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('panto-theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
    }
    setIsInitialized(true);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      // Persist to localStorage
      localStorage.setItem('panto-theme', newValue ? 'dark' : 'light');
      return newValue;
    });
  };

  // Apply theme to document
  useEffect(() => {
    if (!isInitialized) return;

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode, isInitialized]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
