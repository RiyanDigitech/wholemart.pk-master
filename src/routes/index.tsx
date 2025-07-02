import { createBrowserRouter } from 'react-router-dom';
import SupplierDashboard from '../page/SupplierDashboard';
import SellerProfile from '../page/SellerProfile';
import Profile from '../page/Profile';
import LoginPage from '../auth/LoginPage';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <SupplierDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sellerProfile',
    element: <SellerProfile />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
//   {
//     path: '*',
//     element: <SellerProfile />,
//   },
]);

export default router;
