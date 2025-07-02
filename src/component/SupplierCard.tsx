import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SupplierCard = ({
  name,
  rating,
  reviews,
  location,
  verified,
  fastDelivery,
  promotion,
  products,
}: any) => {
  const initials = name
    .split(' ')
    .map((word: string) => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  const previewLine = products.map((p: any) => p.name).join(', ') + '...';

  return (
    <Card
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 2,
        borderRadius: 3,
        boxShadow: 3,
        transition: '0.3s',
        overflow: 'hidden',
        '&:hover': {
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 0 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Avatar sx={{ bgcolor: 'error.main', mr: 2 }}>{initials}</Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              sx={{
                wordWrap: 'break-word',
                whiteSpace: 'normal',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  wordWrap: 'break-word',
                  whiteSpace: 'normal',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {location}
              </Typography>
            </Box>
          </Box>

          {/* Rating */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <StarIcon sx={{ color: '#FFD700', fontSize: 18 }} />
            <Typography variant="body2" fontWeight={500}>
              {rating} ({reviews})
            </Typography>
          </Box>
        </Box>

        {/* Chips */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
          {verified && <Chip label="Verified" color="success" size="small" />}
          {fastDelivery && (
            <Chip label="Same Day" color="default" size="small" />
          )}
          {promotion && (
            <Chip label="Promotion" color="secondary" size="small" />
          )}
        </Box>

        {/* Preview Line */}
        <Typography
  variant="body2"
  color="text.secondary"
  sx={{
    mb: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap', // 💡 clamp to one line
  }}
>
  {previewLine}
</Typography>

        {/* Products List */}
        <Box sx={{ mb: 1 }}>
          {products.slice(0, 3).map((product: any, index: number) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                py: 0.3,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  wordWrap: 'break-word',
                  whiteSpace: 'normal',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {product.name}
              </Typography>
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{
                  wordWrap: 'break-word',
                  whiteSpace: 'normal',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                PKR {product.price.toLocaleString()}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Buttons */}
        <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            sx={{
              bgcolor: '#25D366',
              textTransform: 'none',
              '&:hover': { bgcolor: '#1ebd5a' },
            }}
          >
            WhatsApp
          </Button>
          <Button variant="outlined" sx={{ textTransform: 'none' }}>
            <a href="/sellerProfile" style={{ textDecoration: 'none' }}>
              View Details
            </a>
          </Button>
        </Box>

        {/* Timestamp */}
        <Typography variant="caption" color="text.secondary">
          🕒 Prices updated 1m ago
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SupplierCard;
