import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Define types for the parameters
type QueryType = 'up' | 'down' | 'between' | 'only';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// `useResponsive` hook with TypeScript types
export function useResponsive(query: QueryType, start: Breakpoint, end?: Breakpoint): boolean {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start));
  const mediaBetween = end ? useMediaQuery(theme.breakpoints.between(start, end)) : false;
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  switch (query) {
    case 'up':
      return mediaUp;
    case 'down':
      return mediaDown;
    case 'between':
      return mediaBetween;
    case 'only':
      return mediaOnly;
    default:
      return false;
  }
}

// `useWidth` hook with TypeScript types
export function useWidth(): Breakpoint {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse() as Breakpoint[];

  return (
    keys.reduce<Breakpoint | null>((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}
