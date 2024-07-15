import { useMemo, ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider, Theme } from '@mui/material/styles';

import { palette } from './palette';
import { shadows } from './shadows';
import { overrides } from './overrides';
import { typography } from './typography';
import { customShadows } from './custom-shadows';

// Define interfaces if necessary
interface ThemeProviderProps {
  children?: ReactNode;
}

// Define the theme shape
interface CustomTheme extends Theme {
  customShadows: any; // Adjust this type as per your customShadows implementation
  shape: {
    borderRadius: number;
  };
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const memoizedValue = useMemo(
    () => ({
      palette: palette(),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme: CustomTheme = createTheme(memoizedValue);

  // Apply component overrides if necessary
  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
