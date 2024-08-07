import { forwardRef } from 'react';
import { Icon } from '@iconify/react';
import Box, { BoxProps } from '@mui/material/Box';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

interface IconifyProps extends BoxProps {
  icon: string;
  width?: number;
  sx?: SxProps<Theme>;
}

const Iconify = forwardRef<SVGElement, IconifyProps>(({ icon, width = 20, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
));

export default Iconify;
