import Box from '@mui/material/Box';

import Logo from '../../UI/logo';
import Scrollbar from '../../UI/scrollbar';
import { renderAccount } from './SideAccount';
import { renderUpgrade } from './SideInformation';
import { renderMenu } from './SideMenu';


export const renderContent = (
    <Box sx={{ position: 'relative', height: '100vh' }}>
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1 }}>
        <Logo sx={{ mt: 3, ml: 4 }} />
      </Box>
      
      <Box sx={{ mt: 10, height: 'calc(100vh - 10rem)' }}>
        <Scrollbar
          sx={{
            height: '100%',
            '& .simplebar-content': {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          {renderAccount}
  
          {renderMenu}
  
          <Box sx={{ flexGrow: 1 }} />
  
          {renderUpgrade}
        </Scrollbar>
      </Box>
    </Box>
  );