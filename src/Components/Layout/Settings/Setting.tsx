import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Icon } from '@iconify/react';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import { useColor } from './ColorContext';

const colors = [
  { name: 'Red', hex: '#f44336' },
  { name: 'Green', hex: '#4caf50' },
  { name: 'Blue', hex: '#2196f3' },
  { name: 'orange', hex: '#ff763b' },
  { name: 'Purple', hex: '#9c27b0' },
];

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { setPrimaryColor } = useColor();

  const toggleDrawer =
    (anchor: keyof typeof state, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent): void => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handleColorSelect = (color: string) => {
    setPrimaryColor(color);
    console.log(`Selected color: ${color}`);
  };

  const list = (anchor: keyof typeof state) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText primary="Sidenav Colors" />
        </ListItem>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            mt: 2,
          }}
        >
          {colors.map((color) => (
            <ListItemButton key={color.name} onClick={() => handleColorSelect(color.hex)}>
              <Box
                sx={{
                  width: 60,
                  height: 20,
                  backgroundColor: color.hex,
                  borderRadius: '50%',
                  mb: 1.5,
                }}
              />
            </ListItemButton>
          ))}
        </Box>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}>
        <Icon icon={settings2Fill} color='#6b6b6b' width={30} height={30} />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {list('right')}
      </SwipeableDrawer>
    </div>
  );
}