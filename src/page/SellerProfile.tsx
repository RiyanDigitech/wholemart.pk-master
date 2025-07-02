import {
  Box,
  Avatar,
  Typography,
  Button,
  Chip,
  Stack,
  Rating,
  Paper,
  useMediaQuery,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '@mui/material/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ProfileTabs from '../component/ProfileTabs';

function SellerProfile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: 2, bgcolor: '#f9f9f9', minHeight: '100vh' }}>
      {/* 🔙 Back Button */}
      <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded active:scale-105 transition mb-5 mt-3">
        <a href="/" className="flex items-center gap-1">
          <KeyboardBackspaceIcon /> Back to Suppliers
        </a>
      </button>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 4,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: 3,
        }}
      >
        {/* 🧑 Avatar */}
        <Avatar
          sx={{
            bgcolor: '#d32f2f',
            width: 64,
            height: 64,
            fontSize: 24,
            borderRadius: 2,
            mb: isMobile ? 2 : 0,
          }}
        >
          AT
        </Avatar>

        {/* 📝 Seller Info */}
        <Box flex={1} width="100%">
          <Typography variant="h6" fontWeight="bold">
            Al-Siddique Traders
          </Typography>
          <Typography color="text.secondary" mt={0.5}>
            Since 2019 • Liaquatabad, Karachi
          </Typography>

          {/* ⭐ Rating */}
          <Box display="flex" alignItems="center" mt={1}>
            <Rating name="read-only" value={4.8} precision={0.1} readOnly />
            <Typography ml={1} fontWeight={500}>
              4.8{' '}
              <Typography component="span" color="text.secondary">
                (95 reviews)
              </Typography>
            </Typography>
          </Box>

          {/* ✅ Badges */}
          <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
            <Chip icon={<CheckCircleIcon fontSize="small" />} label="Verified Supplier" color="success" />
            <Chip label="Verified" variant="outlined" />
            <Chip label="Same Day" variant="outlined" />
          </Stack>

          {/* 📄 Description */}
          <Typography mt={2} color="text.secondary">
            Specializing in beverages, snacks, and dairy products
          </Typography>
        </Box>

        {/* 📞 Action Buttons */}
        <Stack
          direction={isMobile ? 'row' : 'column'}
          spacing={2}
          sx={{
            width: isMobile ? '100%' : 'auto',
            mt: isMobile ? 2 : 0,
          }}
        >
          <Button
            fullWidth={isMobile}
            variant="contained"
            startIcon={<WhatsAppIcon />}
            sx={{ bgcolor: '#25D366' }}
          >
            WhatsApp
          </Button>
          <Button
            fullWidth={isMobile}
            variant="outlined"
            startIcon={<PhoneIcon />}
          >
            Call
          </Button>
        </Stack>
      </Paper>

      {/* 🔁 Tabs Below */}
      <Box mt={4}>
        <ProfileTabs />
      </Box>
    </Box>
  );
}

export default SellerProfile;
