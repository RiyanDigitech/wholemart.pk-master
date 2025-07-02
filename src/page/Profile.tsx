import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Card,
  Grid,
  Button,
  Divider,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Habib Qureshi',
    email: 'habib@example.com',
    phone: '+92 300 1234567',
    address: 'Karachi, Pakistan',
    avatar: '',
  });

  const orders = {
    total: 24,
    completed: 18,
    pending: 6,
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Updated Data:', formData);
    handleClose();
  };

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', p: { xs: 2, sm: 3 } }}>
      {/* Back Button */}
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        sx={{ mb: 3, borderRadius: 3 }}
      >
        Back
      </Button>

      {/* User Info Card */}
      <Card sx={{ mb: 4, p: { xs: 2, sm: 3 }, borderRadius: 4, boxShadow: 4, position: 'relative' }}>
        <Button
          variant="outlined"
          size="small"
          sx={{ position: 'absolute', top: 16, right: 16, borderRadius: 2 }}
          onClick={handleOpen}
        >
          Edit Profile
        </Button>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 3,
            textAlign: { xs: 'left', sm: 'inherit' },
          }}
        >
          <Avatar
            src={formData.avatar || 'https://via.placeholder.com/150'}
            alt={formData.name}
            sx={{ width: 90, height: 90 }}
          />
          <Box>
            <Typography variant="h5" fontWeight="bold">{formData.name}</Typography>
            <Stack direction="row" alignItems="center" spacing={1} mt={1}>
              <EmailIcon fontSize="small" color="action" />
              <Typography variant="body2">{formData.email}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} mt={0.5}>
              <PhoneIcon fontSize="small" color="action" />
              <Typography variant="body2">{formData.phone}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} mt={0.5}>
              <LocationOnIcon fontSize="small" color="action" />
              <Typography variant="body2">{formData.address}</Typography>
            </Stack>
          </Box>
        </Box>
      </Card>

      {/* Order Summary */}
      {/* <Card sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, boxShadow: 2 }}>
        <Typography variant="h6" mb={2}>📦 Order Summary</Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ p: 2, textAlign: 'center', backgroundColor: '#f0f4ff', borderRadius: 3 }}>
              <ShoppingCartIcon fontSize="large" color="primary" />
              <Typography variant="h5" mt={1}>{orders.total}</Typography>
              <Typography>Total Orders</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ p: 2, textAlign: 'center', backgroundColor: '#e8f5e9', borderRadius: 3 }}>
              <CheckCircleIcon fontSize="large" color="success" />
              <Typography variant="h5" mt={1}>{orders.completed}</Typography>
              <Typography>Completed</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ p: 2, textAlign: 'center', backgroundColor: '#fff8e1', borderRadius: 3 }}>
              <HourglassBottomIcon fontSize="large" color="warning" />
              <Typography variant="h5" mt={1}>{orders.pending}</Typography>
              <Typography>Pending</Typography>
            </Card>
          </Grid>
        </Grid>
      </Card> */}

      {/* Edit Profile Modal (without password) */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: { mx: 2 },
        }}
      >
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            name="name"
            margin="dense"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="dense"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            margin="dense"
            value={formData.phone}
            onChange={handleChange}
          />
          <Box mt={2}>
            <Typography variant="subtitle2" mb={1}>
              Upload Profile Image
            </Typography>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  setFormData({ ...formData, avatar: imageUrl });
                }
              }}
            />
          </Box>
          <TextField
            fullWidth
            label="Location"
            name="address"
            margin="dense"
            value={formData.address}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">Cancel</Button>
          <Button onClick={handleSave} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>

      {/* 🔐 Change Password Section */}
      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 4,
          boxShadow: 3,
          border: '1px solid #ccc',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="h6" gutterBottom>Change Password</Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Current Password"
              type="password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="New Password"
              type="password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Box textAlign="right" mt={3}>
          <Button variant="contained" color="primary">Update Password</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
