// import { ReactNode } from 'react';
// import Box, { BoxProps } from '@mui/material/Box';
// import { useResponsive } from '../../../Hooks/use-responsive';
// import { NAV, HEADER } from '../Header/config-layout';

// // ----------------------------------------------------------------------

// const SPACING = 8;

// interface MainProps extends BoxProps {
//   children: ReactNode;
// }

// export default function Main({ children, sx, ...other }: MainProps) {
//   const lgUp = useResponsive('up', 'lg');

//   return (
//     <Box
//       component="main"
//       sx={{
//         flexGrow: 1,
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         py: `${HEADER.H_MOBILE + SPACING}px`,
//         ...(lgUp && {
//           px: 2,
//           py: `${HEADER.H_DESKTOP + SPACING}px`,
//           width: `calc(100% - ${NAV.WIDTH}px)`,
//         }),
//         ...sx,
//       }}
//       {...other}
//     >
//       {children}
//     </Box>
//   );
// }



import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

interface MainProps {
  children: ReactNode;
}

const drawerWidth = 243; // Sidebar width

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        marginTop: 7,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        marginLeft: { sm: `${drawerWidth}px` },
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
