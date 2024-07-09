import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CollectionsIcon from '@mui/icons-material/Collections';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0FF33', '#FF33F0'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select a sidebar color</DialogTitle>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {colors.map((color) => (
            <Grid item xs={4} key={color}>
              <Box
                sx={{
                  bgcolor: color,
                  width: 56,
                  height: 56,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                onClick={() => handleListItemClick(color)}
              >
                <CollectionsIcon sx={{ color: 'white' }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default SimpleDialog;
