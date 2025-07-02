import { Typography, Button, Box, Grid } from '@mui/material';
import SupplierCard from '../component/SupplierCard';
import DashboardLayout from '../component/DashboardLayout';

const SupplierDashboard = () => {
  const suppliers = [
    {
      name: 'Al-Siddique Traders',
      rating: 4.8,
      reviews: 95,
      location: 'Liaquatabad, Karachi',
      verified: true,
      fastDelivery: true,
      promotion: false,
      products: [
        { name: 'Pepsi Cans', price: 1680 },
        { name: 'Fresh Milk', price: 140 },
        { name: 'Lays Chips', price: 800 },
      ],
    },
    // {
    //   name: 'Karachi Wholesale Mart',
    //   rating: 4.5,
    //   reviews: 128,
    //   location: 'Saddar, Karachi',
    //   verified: true,
    //   fastDelivery: true,
    //   promotion: false,
    //   products: [

    //      { name: 'Tissue Box', price: 130 },
    //     { name: 'Detergent Powder', price: 620 },
    //     { name: 'Hand Wash', price: 210 },
    //     // { name: 'Basmati Rice Premium Quality', price: 500 },
    //     // { name: 'Sunflower Cooking Oil', price: 1450 },
    //     // { name: 'White Sugar Refined', price: 4200 },
    //   ],
    // },
    {
      name: 'Karachi WholeSale',
      rating: 4.6,
      reviews: 88,
      location: 'Karachi',
      verified: true,
      fastDelivery: true,
      promotion: true,
      products: [
        { name: 'Tissue Box', price: 130 },
        { name: 'Detergent Powder', price: 620 },
        { name: 'Hand Wash', price: 210 },
      ],
    },
    {
      name: 'Golden Traders',
      rating: 4.6,
      reviews: 88,
      location: 'Nazimabad, Karachi',
      verified: true,
      fastDelivery: true,
      promotion: true,
      products: [
        { name: 'Tissue Box', price: 130 },
        { name: 'Detergent Powder', price: 620 },
        { name: 'Hand Wash', price: 210 },
      ],
    },
    {
      name: 'K.Mart',
      rating: 4.6,
      reviews: 88,
      location: 'Nazimabad, Karachi',
      verified: true,
      fastDelivery: true,
      promotion: true,
      products: [
        { name: 'Tissue Box', price: 130 },
        { name: 'Detergent Powder', price: 620 },
        { name: 'Hand Wash', price: 210 },
      ],
    },
    {
      name: 'Hashim Traders',
      rating: 4.6,
      reviews: 88,
      location: 'Nazimabad, Karachi',
      verified: true,
      fastDelivery: true,
      promotion: true,
      products: [
        { name: 'Tissue Box', price: 130 },
        { name: 'Detergent Powder', price: 620 },
        { name: 'Hand Wash', price: 210 },
      ],
    },
    {
      name: 'A.z Traders',
      rating: 4.6,
      reviews: 88,
      location: 'Nazimabad, Karachi',
      verified: true,
      fastDelivery: true,
      promotion: true,
      products: [
        { name: 'Tissue Box', price: 130 },
        { name: 'Detergent Powder', price: 620 },
        { name: 'Hand Wash', price: 210 },
      ],
    },
  ];

  return (
    <DashboardLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
          Wholesale Suppliers
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Find the best prices from verified suppliers in Karachi
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Showing 1–{suppliers.length} of {suppliers.length} suppliers
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 2,
          flexWrap: 'wrap',
          mb: 3,
        }}
      >
        {/* <Button variant="outlined" sx={{ minWidth: 150 }}>
          Sort by: Best Match
        </Button>
        <Button variant="contained" sx={{ minWidth: 150 }}>
          WhatsApp
        </Button> */}
      </Box>

      <Grid container spacing={3} alignItems="stretch">
  {suppliers.map((supplier, index) => (
    <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
  <SupplierCard {...supplier} />
</Grid>
  ))}
</Grid>
    </DashboardLayout>
  );
};

export default SupplierDashboard;
