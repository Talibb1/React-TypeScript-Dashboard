import { forwardRef, useCallback } from 'react';
import Stack from '@mui/material/Stack';
import { alpha, Theme } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Iconify from '../iconify';

interface ColorPickerProps {
  colors: string[] | string; // Accepts either a string or an array of strings
  selected: string | string[]; // Accepts either a string or an array of strings
  onSelectColor: (color: string | string[]) => void; // Function to handle color selection
  limit?: number | 'auto'; // Optional prop defining the limit of displayed colors
  sx?: React.CSSProperties; // Optional prop for additional custom styles
}

const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  ({ colors, selected, onSelectColor, limit = 'auto', sx, ...other }, ref) => {
    const singleSelect = typeof selected === 'string';

    const handleSelect = useCallback(
      (color: string) => {
        if (singleSelect) {
          if (color !== selected) {
            onSelectColor(color);
          }
        } else {
          const newSelected = selected.includes(color)
            ? selected.filter((value) => value !== color)
            : [...selected, color];

          onSelectColor(newSelected);
        }
      },
      [onSelectColor, selected, singleSelect]
    );

    return (
      <Stack
        ref={ref}
        direction="row"
        display="inline-flex"
        sx={{
          flexWrap: 'wrap',
          ...(limit !== 'auto' && {
            width: limit * 36,
            justifyContent: 'flex-end',
          }),
          ...sx,
        }}
        {...other}
      >
        {Array.isArray(colors) ? colors.map((color) => {
          const hasSelected = singleSelect ? selected === color : selected.includes(color);

          return (
            <ButtonBase
              key={color}
              sx={{
                width: 36,
                height: 36,
                borderRadius: '50%',
              }}
              onClick={() => {
                handleSelect(color);
              }}
            >
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: 20,
                  height: 20,
                  bgcolor: color,
                  borderRadius: '50%',
                  border: (theme: Theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.16)}`,
                  ...(hasSelected && {
                    transform: 'scale(1.3)',
                    boxShadow: `4px 4px 8px 0 ${alpha(color, 0.48)}`,
                    outline: `solid 2px ${alpha(color, 0.08)}`,
                    transition: (theme: Theme) =>
                      theme.transitions.create('all', {
                        duration: theme.transitions.duration.shortest,
                      }),
                  }),
                }}
              >
                <Iconify
                  width={hasSelected ? 12 : 0}
                  icon="eva:checkmark-fill"
                  sx={{
                    color: (theme: Theme) => theme.palette.getContrastText(color),
                    transition: (theme: Theme) =>
                      theme.transitions.create('all', {
                        duration: theme.transitions.duration.shortest,
                      }),
                  }}
                />
              </Stack>
            </ButtonBase>
          );
        }) : null}
      </Stack>
    );
  }
);

export default ColorPicker;
