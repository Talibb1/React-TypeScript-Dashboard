import { createContext, useState, ReactNode, useContext } from 'react';

interface ColorContextProps {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [primaryColor, setPrimaryColor] = useState('#f44336'); // Default color

  return (
    <ColorContext.Provider value={{ primaryColor, setPrimaryColor }}>
      {children}
    </ColorContext.Provider>
  );
};
