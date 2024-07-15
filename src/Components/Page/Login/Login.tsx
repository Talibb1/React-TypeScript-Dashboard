import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme, Theme } from '@mui/material/styles';

import { bgGradient } from '../../../Theme/css';

import Logo from '../../UI/logo';
import LoginForm from './LoginForm';


// ----------------------------------------------------------------------

export default function LoginView(): JSX.Element {
  const theme: Theme = useTheme();
  
  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in to Minimal</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link  variant="subtitle2" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography>
          <LoginForm/>

        </Card>
      </Stack>
    </Box>
  );
}
