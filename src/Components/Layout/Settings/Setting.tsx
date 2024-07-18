import React, { useState, useCallback, memo } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
  { name: 'Orange', hex: '#ff763b' },
  { name: 'Purple', hex: '#9c27b0' },
];

const ColorListItem = memo(({ color, onSelect }: { color: { name: string; hex: string }; onSelect: (color: string) => void }) => (
  <ListItemButton onClick={() => onSelect(color.hex)}>
    <Box
      sx={{
        width: 60,
        height: 30,
        backgroundColor: color.hex,
        borderRadius: '50%',
        mb: 1.5,
      }}
    />
  </ListItemButton>
));

const ColorList = ({ onSelect }: { onSelect: (color: string) => void }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      mt: 2,
    }}
  >
    {colors.map((color) => (
      <ColorListItem key={color.name} color={color} onSelect={onSelect} />
    ))}
  </Box>
);

const DrawerList = ({ toggleDrawer, onSelect }: { toggleDrawer: (anchor: 'top' | 'left' | 'bottom' | 'right', open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void, onSelect: (color: string) => void }) => (
  <Box
    sx={{ width: 300 }}
    role="presentation"
    onClick={toggleDrawer('right', false)}
    onKeyDown={toggleDrawer('right', false)}
  >
    <List>
      <ListItem
        sx={{
          borderTop: '1px solid rgba(0, 0, 0, 0.12)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <ListItemText
          primary={
            <Typography variant="h6" fontWeight="bold">
              Sidenav Colors
            </Typography>
          }
        />
      </ListItem>
      <ColorList onSelect={onSelect} />
    </List>
  </Box>
);

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({ top: false, left: false, bottom: false, right: false });
  const { setPrimaryColor } = useColor();

  const toggleDrawer = useCallback(
    (anchor: 'top' | 'left' | 'bottom' | 'right', open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    },
    [state]
  );

  const handleColorSelect = useCallback(
    (color: string) => {
      setPrimaryColor(color);
      console.log(`Selected color: ${color}`);
    },
    [setPrimaryColor]
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
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(247, 247, 247, 0.09)', 
            backdropFilter: 'blur(9px)',
          },
        }}
      >
        <DrawerList toggleDrawer={toggleDrawer} onSelect={handleColorSelect} />
      </SwipeableDrawer>
    </div>
  );
}
