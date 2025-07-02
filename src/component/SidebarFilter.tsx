import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Typography,
  Button,
  Divider,
} from '@mui/material';

const SidebarFilter = () => {
  return (
    <Box sx={{ minWidth: 250}}>
      <Typography variant="h6" gutterBottom>
        Filter Products
      </Typography>

      <TextField
        fullWidth
        label="Search suppliers..."
        variant="outlined"
        sx={{ mb: 2 }}
        size="small"
      />

      <Divider sx={{ mb: 2 }} />

      <Typography variant="subtitle1" gutterBottom>
        Categories
      </Typography>
      {[
        'Groceries & Food Items (5)',
        'Beverages (3)',
        'Cleaning Supplies (2)',
        'Personal Care (3)',
        'Snacks & Confectionery (2)',
      ].map((label) => (
        <FormControlLabel key={label} control={<Checkbox />} label={label} />
      ))}

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1" gutterBottom>
        Price Range (PKR)
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField label="Min" variant="outlined" size="small" fullWidth />
        <TextField label="Max" variant="outlined" size="small" fullWidth />
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1" gutterBottom>
        Location
      </Typography>
      <TextField select fullWidth variant="outlined" defaultValue="All Areas" size="small">
        <MenuItem value="All Areas">All Areas</MenuItem>
        <MenuItem value="Karachi">Karachi</MenuItem>
      </TextField>

      <Button fullWidth variant="outlined" sx={{ mt: 3 }}>
        Clear All
      </Button>
    </Box>
  );
};

export default SidebarFilter;
