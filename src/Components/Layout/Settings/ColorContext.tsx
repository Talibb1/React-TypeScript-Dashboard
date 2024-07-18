import { createContext, useState, ReactNode, useContext, useMemo } from 'react';

interface ColorContextProps {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const useColor = (): ColorContextProps => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [primaryColor, setPrimaryColor] = useState('#f44336');

  const value = useMemo(() => ({ primaryColor, setPrimaryColor }), [primaryColor]);

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
};
