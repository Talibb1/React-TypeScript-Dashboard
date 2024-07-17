import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


interface CenteredContentProps {
  children?: ReactNode;
}

const UserAccount = ({ children }: CenteredContentProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        width: '99%',
        padding: 2, 
      }}
    >
    
      
    <Button variant="contained" color="primary">
        Save Changes
      </Button>
      
      {children}
    </Box>
  );
};

export default UserAccount;
