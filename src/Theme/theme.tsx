// import { createTheme } from '@mui/material/styles';
// import { useMemo, useState, createContext, useContext } from 'react';
// import { lightPalette, darkPalette } from './palette2';

// const ColorModeContext = createContext({
//   toggleColorMode: () => {},
// });

// export const useColorMode = () => useContext(ColorModeContext);

// export const useMode = () => {
//   const [mode, setMode] = useState('light');

//   const colorMode = useMemo(() => ({
//     toggleColorMode: () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
//   }), []);

//   const theme = useMemo(() => {
//     const palette = mode === 'light' ? lightPalette : darkPalette;
//     return createTheme({
//       palette: palette,
//     });
//   }, [mode]);

//   return [theme, colorMode];
// };

// // export const ColorModeProvider = ({ children }) => {
// //   const [theme, colorMode] = useMode();

// //   return (
// //     <ColorModeContext.Provider value={colorMode}>
// //       <ThemeProvider theme={theme}>
// //         <CssBaseline />
// //         {children}
// //       </ThemeProvider>
// //     </ColorModeContext.Provider>
// //   );
// // };
