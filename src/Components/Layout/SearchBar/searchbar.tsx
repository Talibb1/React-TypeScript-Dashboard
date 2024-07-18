import { useState, useCallback, memo } from 'react';
import Slide from '@mui/material/Slide';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import Iconify from '../../UI/iconify';
import { StyledSearchbar } from './StyledSearchbar';

// ----------------------------------------------------------------------


const SearchInput = memo(({ onClose }: { onClose: () => void }) => (
  <StyledSearchbar>
    <Input
      autoFocus
      fullWidth
      disableUnderline
      placeholder="Search..."
      startAdornment={
        <InputAdornment position="start">
          <Iconify
            icon="eva:search-fill"
            sx={{ color: 'text.disabled', width: 20, height: 20 }}
          />
        </InputAdornment>
      }
      sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
    />
    <Button variant="contained" onClick={onClose}>
      Search
    </Button>
  </StyledSearchbar>
));

// ----------------------------------------------------------------------

export default function Searchbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!open && (
          <IconButton onClick={handleOpen}>
            <Iconify icon="eva:search-fill" />
          </IconButton>
        )}

        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <div>
            <SearchInput onClose={handleClose} />
          </div>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
