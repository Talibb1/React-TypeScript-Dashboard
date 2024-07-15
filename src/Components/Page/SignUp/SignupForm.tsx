import { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';
import Iconify from '../../UI/iconify';

const SignupForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleClick = (): void => {
    // Perform Signup logic here, and handle remember me functionality
    if (rememberMe) {
      // Implement remember me functionality here
      console.log('Remember me is checked');
    }
    navigate('/dashboard');
  };

  return (
    <>
      <Stack spacing={3}>
        <Stack direction="row" spacing={2}>
          <TextField name="firstName" label="First Name" fullWidth />
          <TextField name="lastName" label="Last Name" fullWidth />
        </Stack>

        <TextField name="email" label="Email address" fullWidth />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-2-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 3 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
          }
          label="Remember me"
        />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        Signup
      </LoadingButton>
    </>
  );
};

export default SignupForm;
