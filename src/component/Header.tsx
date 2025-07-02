import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  Badge,
  Box,
  Avatar,
  useMediaQuery,
  Menu,
  MenuItem,
} from '@mui/material';
import { useContext, useState } from 'react';
import { ThemeContext } from '../theme/Theme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoutIcon from '@mui/icons-material/Logout';
import TranslateIcon from '@mui/icons-material/Translate';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const { toggleTheme, mode } = useContext(ThemeContext);
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorElMobile, setAnchorElMobile] = useState<null | HTMLElement>(null);
  const handleHumburgerOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMobile(event.currentTarget);
  };
  const handleHumburgerClose = () => {
    setAnchorElMobile(null);
    navigate('/profile');
  };

  const handleLogout = () => {
  localStorage.removeItem('token');
  navigate('/login');
};

  const [anchorElDesktop, setAnchorElDesktop] = useState<null | HTMLElement>(null);
  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElDesktop(event.currentTarget);
  };
  const handleDesktopMenuClose = () => {
    setAnchorElDesktop(null);
  };

  const goTo = (path: string) => {
    navigate(path);
    handleDesktopMenuClose();
  };

  return (
    <AppBar position="static" elevation={4} sx={{ bgcolor: 'primary.main', color: '#fff' }}>
      <Toolbar sx={{ flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center' }}>
        {/* Hamburger for mobile */}
        {isMobile && (
          <IconButton edge="start" color="inherit" onClick={onMenuClick} sx={{ mb: -2 }}>
            <MenuIcon className='mr-2 mb-2' />
             {/* Logo */}
        <Typography className='text-center justify-center align-middle flex' variant="h6" sx={{ flexGrow: isMobile ? 0 : 1, fontWeight: 600, mb: isMobile ? 1 : 0 }}>
          WholeMart.pk
        </Typography>
          </IconButton>
        )}
        {!isMobile && (
          <Typography variant="h6" sx={{ flexGrow: isMobile ? 0 : 1, fontWeight: 600, mb: isMobile ? 1 : 0 }}>
          WholeMart.pk
        </Typography>
        )
        }
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            width: isMobile ? '100%' : 'auto',
          }}
        >
          <IconButton color="inherit">
            <Badge badgeContent={2} color="error">
              <FavoriteIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <TranslateIcon />
          </IconButton>

          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <IconButton color="inherit" onClick={isMobile ? handleHumburgerOpen : handleProfileClick}>
            <Avatar sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Box>
        {isMobile && (
          <Menu
            anchorEl={anchorElMobile}
            open={Boolean(anchorElMobile)}
            onClose={handleHumburgerClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleHumburgerClose}>
              <AccountCircleIcon className="mr-2" />
              Ahmed Khan
            </MenuItem>
            <MenuItem onClick={handleHumburgerClose}>
              <SettingsIcon className="mr-2" />
              Setting
            </MenuItem>
            <MenuItem onClick={handleHumburgerClose}>
              <HistoryToggleOffIcon className="mr-2" />
              History
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <LogoutIcon className="mr-2" />
              Logout
            </MenuItem>
            
          </Menu>
        )}
        {!isMobile && (
          <Menu
            anchorEl={anchorElDesktop}
            open={Boolean(anchorElDesktop)}
            onClose={handleDesktopMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={() => goTo('/profile')}>
              <PersonIcon className="mr-2" />
              Profile
            </MenuItem>
            <MenuItem onClick={() => goTo('/settings')}>
              <SettingsIcon className="mr-2" />
              Setting
            </MenuItem>
            <MenuItem onClick={() => goTo('/history')}>
              <HistoryToggleOffIcon className="mr-2" />
              History
            </MenuItem>
            <MenuItem onClick={handleLogout} >
              <LogoutIcon className="mr-2" />
              Logout
            </MenuItem>
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
