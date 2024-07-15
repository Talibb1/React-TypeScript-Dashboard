import { memo, forwardRef, ReactNode} from 'react';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

import { StyledScrollbar, StyledRootScrollbar } from './styles';


interface ScrollbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const ScrollbarComponent = forwardRef<HTMLDivElement, ScrollbarProps>(
  ({ children, sx, ...other }, ref) => {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (mobile) {
      return (
        <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
          {children}
        </Box>
      );
    }

    return (
      <StyledRootScrollbar>
        <StyledScrollbar
          scrollableNodeProps={{
            ref,
          }}
          clickOnTrack={false}
          sx={sx}
          {...other}
        >
          {children}
        </StyledScrollbar>
      </StyledRootScrollbar>
    );
  }
);

const Scrollbar = memo(ScrollbarComponent);

export default Scrollbar;
