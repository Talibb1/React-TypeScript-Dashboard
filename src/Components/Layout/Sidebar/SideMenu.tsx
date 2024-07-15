import Stack from '@mui/material/Stack';
import navConfig from './SideConfigNavigation';
import { NavItem } from './SideItem';

export const renderMenu = (
  <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
    {navConfig.map((item) => (
      <NavItem key={item.title} item={item} />
    ))}
  </Stack>
);
