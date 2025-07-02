import React, { useState } from 'react';
import {
    Box,
    Tabs,
    Tab,
    Typography,
    Grid,
    Paper,
    Button,
    MenuItem,
    Select,
    Avatar,
    Stack,
    useMediaQuery,
    IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarIcon from '@mui/icons-material/Star';
function TabPanel({ children, value, index }: any) {
    return value === index ? <Box sx={{ mt: 3 }}>{children}</Box> : null;
}
const products = [
    {
        name: 'Coca Cola',
        desc: '1.5L bottles',
        variants: ['Original', 'Diet', 'Zero'],
        price: 180,
        unit: 'per 1.5L bottle',
        moq: '12',
        stock: '200+',
    },
    {
        name: 'Fresh Milk',
        desc: '1L pack, Brand: Nestle',
        variants: ['Full Cream', 'Half Cream', 'Low Fat'],
        price: 140,
        unit: 'per 1L pack',
        moq: '20',
        stock: '300+',
    },
    {
        name: 'Kurkure Snacks',
        desc: 'Crunchy corn puffs',
        variants: ['Masala Munch', 'Chicken', 'Solid Masti'],
        price: 45,
        unit: 'per 40g pack',
        moq: '50',
        stock: '400+',
    },
    {
        name: 'Pepsi',
        desc: '1.5L bottles',
        variants: ['Regular', 'Diet', 'Black Lime'],
        price: 175,
        unit: 'per 1.5L bottle',
        moq: '10',
        stock: '180+',
    },
    {
        name: 'Olper’s Milk',
        desc: '1L pack, UHT treated',
        variants: ['Full Cream', 'Low Fat'],
        price: 145,
        unit: 'per 1L pack',
        moq: '24',
        stock: '250+',
    },
    {
        name: 'Lays Chips',
        desc: 'Potato chips 90g',
        variants: ['Salted', 'BBQ', 'Masala'],
        price: 70,
        unit: 'per 90g pack',
        moq: '40',
        stock: '500+',
    },
    {
        name: 'Nestlé Juice',
        desc: '1L tetra pack',
        variants: ['Mango', 'Apple', 'Peach'],
        price: 160,
        unit: 'per 1L pack',
        moq: '30',
        stock: '350+',
    },
    {
        name: 'Shan Masala',
        desc: 'Spice mix boxes 50g',
        variants: ['Biryani', 'Karahi', 'Korma'],
        price: 60,
        unit: 'per 50g box',
        moq: '100',
        stock: '600+',
    },
];


function ProfileTabs() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
     const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (idx) => {
    setFavorites((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ px: 2, py: 3 }}>
            {/* Tabs */}
            <Box
                sx={{
                      bgcolor: '#f5f5f5',
                    px: 2,
                    
                    borderRadius: 2,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant={isMobile ? 'scrollable' : 'standard'}
                    scrollButtons={isMobile ? 'auto' : false}
                    TabIndicatorProps={{ style: { backgroundColor: '#000' } }}
                    sx={{
                        '.MuiTab-root': {
                            textTransform: 'none',
                            fontWeight: 500,
                            fontSize: 14,
                            minWidth: 250,
                        },
                        '.Mui-selected': {
                            fontWeight: 600,
                            bgcolor: 'white',
                            borderRadius: 1.5,
                        },
                    }}
                >
                    <Tab label="Products Catalog" />
                    <Tab label="Company Info" />
                    <Tab label="Reviews" />
                    <Tab label="Contact" />
                </Tabs>
            </Box>

            {/* Tab Panels */}
            <TabPanel value={value} index={0}>
  {/* 🔍 Filter/Search Panel */}
  <div className="bg-white p-4 mb-7 rounded-md shadow flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
    {/* Search Input */}
    <input
      type="text"
      placeholder="Search products..."
      className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Sort + Filter */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
      {/* Sort Dropdown */}
      <select className="border border-gray-300 rounded px-5 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="highToLow">Price: High to Low</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="newest">Newest</option>
      </select>

      {/* Filter Count */}
      <div className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>
        5 products
      </div>
    </div>
  </div>

  {/* 🧱 Product Grid */}
  <Grid container spacing={2}>
  {products.map((item, idx) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
      <Paper
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          borderRadius: 3,
          p: 2,
        }}
      >
        {/* ⭐ Favorite Toggle */}
        <IconButton
          onClick={() => toggleFavorite(idx)}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 2,
            '&:hover': {
              bgcolor: '#f0f0f0',
            },
          }}
        >
          {favorites.includes(idx) ? (
            <StarIcon color="warning" />
          ) : (
            <StarBorderIcon color="warning" />
          )}
        </IconButton>

        <Box sx={{ flexGrow: 1 }}>
          <Stack direction="row" spacing={2} alignItems="center" mt={1}>
            <Avatar variant="rounded" sx={{ bgcolor: '#eee', width: 56, height: 56 }} />
            <Box>
              <Typography fontWeight="bold">{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
            </Box>
          </Stack>

          <Typography variant="body2" fontWeight="500" mt={2}>
            Variants:
          </Typography>
          <Select size="small" value={item.variants[0]} fullWidth>
            {item.variants.map((variant, vIdx) => (
              <MenuItem key={vIdx} value={variant}>
                {variant}
              </MenuItem>
            ))}
          </Select>

          <Box className="flex justify-between text-sm text-gray-700 mt-2">
            <Typography>MOQ: {item.moq}</Typography>
            <Typography>Stock: {item.stock}</Typography>
          </Box>

          <Typography fontWeight="bold" fontSize={18} mt={1}>
            PKR {item.price}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {item.unit}
          </Typography>
        </Box>

        {/* 📦 Fixed Position Buttons at Bottom */}
        <Stack direction="row" spacing={1} mt={2}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<RemoveRedEyeIcon />}
            sx={{ bgcolor: '#007bff' }}
          >
            View
          </Button>
          <Button fullWidth variant="outlined" startIcon={<LocalMallIcon />}>
            Order
          </Button>
        </Stack>
      </Paper>
    </Grid>
  ))}
</Grid>

</TabPanel>



            <TabPanel value={value} index={1}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-white rounded">
                    {/* Left Side - Company Details */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Company Details</h2>
                        <div className="mb-2">
                            <p className="text-sm text-gray-500">Company Name</p>
                            <p className="font-medium">Al-Siddique Traders</p>
                        </div>
                        <div className="mb-2">
                            <p className="text-sm text-gray-500">Description</p>
                            <p>Specializing in beverages, snacks, and dairy products</p>
                        </div>
                        <div className="mb-2">
                            <p className="text-sm text-gray-500">Location</p>
                            <p>Liaquatabad, Karachi</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Address</p>
                            <p>Block A-123, Liaquatabad, Karachi</p>
                        </div>
                    </div>

                    {/* Right Side - Business Statistics */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Business Statistics</h2>
                        <div className="mb-2">
                            <p className="text-sm text-gray-500">Member Since</p>
                            <p>2019</p>
                        </div>
                        <div className="mb-2">
                            <p className="text-sm text-gray-500">Total Products</p>
                            <p>5</p>
                        </div>
                        <div className="mb-2">
                            <p className="text-sm text-gray-500">Orders Completed</p>
                            <p>1</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Last Active</p>
                            <p>24m ago</p>
                        </div>
                    </div>
                </div>
            </TabPanel>


            {/* Reviews Tab */}
            <TabPanel value={value} index={2}>
                              <div className="p-6 bg-white rounded">
                  <div className='flex justify-between mb-5'>
                      <h2 className="text-lg font-semibold mb-4">Customer Reviews</h2>
                    <select className="border border-gray-300 rounded px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option value="highToLow">Recent Reviews</option>
      <option value="lowToHigh">Low Reviews</option>
      <option value="lowToHigh">High Reviews</option>
      {/* <option value="newest">Newest</option> */}
    </select>
                  </div>

                    <div className="space-y-4">
                        <div className="bg-gray-100 p-4 rounded-md shadow">
                            <p className="font-medium">⭐️⭐️⭐️⭐️⭐️</p>
                            <p className="text-gray-700 mt-2">Excellent service and fast delivery!</p>
                            <p className="text-sm text-gray-500 mt-1">- Ahmed, Karachi</p>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-md shadow">
                            <p className="font-medium">⭐️⭐️⭐️⭐️</p>
                            <p className="text-gray-700 mt-2">Good products, will order again.</p>
                            <p className="text-sm text-gray-500 mt-1">- Sara, Lahore</p>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-md shadow">
                            <p className="font-medium">⭐️⭐️⭐️</p>
                            <p className="text-gray-700 mt-2">Average experience. Could improve packaging.</p>
                            <p className="text-sm text-gray-500 mt-1">- Imran, Islamabad</p>
                        </div>
                    </div>
                </div>
            </TabPanel>

            <TabPanel value={value} index={3}>
                {/* Contact Tab */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                    {/* Left: Contact Info */}
                    <div className="bg-white rounded-md p-6 shadow">
  <h3 className="text-lg font-semibold mb-4">Our Location</h3>
  <div className="w-full h-64">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.9999999999995!2d72.831055!3d33.684420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfbd6c3e1e65%3A0x123456789abcdef0!2sYour%20Business%20Location!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-md"
    ></iframe>
  </div>
</div>


                    {/* Right: Quick Messages */}
                    <div className="bg-white rounded-md p-6 shadow">
                        <h3 className="text-lg font-semibold mb-2">Quick Messages</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Send a quick message via WhatsApp to inquire about products and pricing.
                        </p>
                        <div className="space-y-2">
                            {/* {quickMessages.map((msg, index) => ( */}
                            <a
                                //   key={index}
                                //   href={`https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(msg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition"
                            >
                                Request bulk pricing
                            </a>
                            {/* ))} */}
                        </div>
                        <div className="space-y-2 mt-1">
                            {/* {quickMessages.map((msg, index) => ( */}
                            <a
                                //   key={index}
                                //   href={`https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(msg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition"
                            >
                                Inquire about delivery
                            </a>
                            {/* ))} */}
                        </div>
                        <div className="space-y-2 mt-1">
                            {/* {quickMessages.map((msg, index) => ( */}
                            <a
                                //   key={index}
                                //   href={`https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(msg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition"
                            >
                                Ask about MOQ
                            </a>
                            {/* ))} */}
                        </div>
                    </div>
                </div>
            </TabPanel>
        </Box>
    );
}

export default ProfileTabs;
