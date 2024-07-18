import { useState, MouseEvent, useCallback, memo } from 'react';

import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

// ----------------------------------------------------------------------

interface LangOption {
  value: string;
  label: string;
  icon: string;
}

const LANGS: LangOption[] = [
  {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/ic_flag_en.svg',
  },
  {
    value: 'de',
    label: 'German',
    icon: '/assets/icons/ic_flag_de.svg',
  },
  {
    value: 'fr',
    label: 'French',
    icon: '/assets/icons/ic_flag_fr.svg',
  },
];

// ----------------------------------------------------------------------

const LanguageMenuItem = memo(({ option, selected, onClose }: { option: LangOption, selected: boolean, onClose: () => void }) => (
  <MenuItem
    key={option.value}
    selected={selected}
    onClick={onClose}
    sx={{ typography: 'body2', py: 1 }}
  >
    <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />
    {option.label}
  </MenuItem>
));

export default function LanguagePopover() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(anchorEl && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <img src={LANGS[0].icon} alt={LANGS[0].label} />
      </IconButton>

      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {LANGS.map((option) => (
          <LanguageMenuItem
            key={option.value}
            option={option}
            selected={option.value === LANGS[0].value}
            onClose={handleClose}
          />
        ))}
      </Popover>
    </>
  );
}
