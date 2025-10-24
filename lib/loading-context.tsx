"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

interface LoadingContextType {
  hasVisited: boolean;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [hasVisited, setHasVisited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has visited before using sessionStorage
    const visited = sessionStorage.getItem('hasVisited');
    
    if (visited) {
      // User has visited before, skip loading animation
      setHasVisited(true);
      setIsLoading(false);
    } else {
      // First time visitor, show loading animation
      setHasVisited(false);
      setIsLoading(true);
      
      // Mark as visited after loading completes
      const timer = setTimeout(() => {
        sessionStorage.setItem('hasVisited', 'true');
        setHasVisited(true);
        setIsLoading(false);
      }, 2000); // Adjust timing based on your loading animation duration
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <LoadingContext.Provider value={{ hasVisited, isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
