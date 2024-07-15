import React, { useState } from 'react';
import { alpha } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import { useLocation, Link } from 'react-router-dom';
import { NavConfigItem } from './SideConfigNavigation';
import { useColor } from '../Settings/ColorContext';

interface NavItemProps {
  item: NavConfigItem;
}

export const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const location = useLocation();
  const active = item.path === location.pathname;
  const [open, setOpen] = useState(false);
  const { primaryColor } = useColor();

  const handleClick = () => {
    if (item.children) {
      setOpen(!open);
    }
  };

  return (
    <>
      <ListItemButton
        component={item.children ? 'div' : Link}
        to={item.children ? '#' : item.path}
        onClick={handleClick}
        sx={{
          minHeight: 44,
          borderRadius: 0.75,
          typography: 'body2',
          color: 'text.secondary',
          textTransform: 'capitalize',
          fontWeight: 'fontWeightMedium',
          ...(active && {
            color: primaryColor,
            fontWeight: 'fontWeightSemiBold',
            bgcolor: () => alpha(primaryColor, 0.08),
            '&:hover': {
              bgcolor: () => alpha(primaryColor, 0.16),
            },
          }),
        }}
      >
        <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
          {item.icon}
        </Box>
        <Box component="span">{item.title}</Box>
      </ListItemButton>
      {item.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 4 }}>
            {item.children.map((child) => (
              <NavItem key={child.title} item={child} />
            ))}
          </Box>
        </Collapse>
      )}
    </>
  );
};
