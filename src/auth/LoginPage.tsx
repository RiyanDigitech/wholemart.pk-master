
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Avatar,
  useTheme,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate()


  const handleLogin = () => {
   // After successful login
  localStorage.setItem('token', 'true');
  navigate('/'); // redirect to home
};
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #2196f3, #e3f2fd)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 5,
          width: 350,
          textAlign: 'center',
          borderRadius: 5,
        }}
      >
        <Avatar sx={{ bgcolor: '#1976d2', margin: '0 auto', mb: 2 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
          Sign In
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button
        onClick={handleLogin}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#1976d2',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};
export default LoginPage;
