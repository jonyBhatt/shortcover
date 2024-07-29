// RouteContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface RouteContextType {
  currentRoute: string;
  setCurrentRoute: (route: string) => void;
}

const RouteContext = createContext<RouteContextType | undefined>(undefined);

export const NavLinkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<string>('');

  return (
    <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRouteContext = () => {
  const context = useContext(RouteContext);
  if (context === undefined) {
    throw new Error('useRouteContext must be used within a RouteProvider');
  }
  return context;
};
