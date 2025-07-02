import { Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import Header from '../component/Header';
import SidebarFilter from '../component/SidebarFilter';
import { useState } from 'react';

const drawerWidth = 280;

const DashboardLayout = ({ children }: any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden', bgcolor: 'background.default' }}>
      <Header onMenuClick={toggleDrawer} />

      <Box sx={{ display: 'flex', flexGrow: 1, height: 'calc(100% - 64px)' }}>
        {/* Sidebar */}
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={toggleDrawer}
            ModalProps={{ keepMounted: true }}
            sx={{
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxShadow: 3,
                p: 2, // ✅ Add padding here
              },
            }}
          >
            <SidebarFilter />
          </Drawer>
        ) : (
          <Box
            sx={{
              width: drawerWidth,
              bgcolor: 'background.paper',
              overflowY: 'scroll',
              borderRight:'1px solid grey',
              p: 2,
              '::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none', // Firefox
            }}
          >
            <SidebarFilter />
          </Box>
        )}

        {/* Main Content */}
        <Box
          sx={{
            width: '78%',
            flex: 1,
            overflowY: 'auto',
            px: { xs: 2, md: 4 }, // Add some side padding
            py: 3,
          }}
        >
          <Box sx={{ maxWidth: '100%' }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
