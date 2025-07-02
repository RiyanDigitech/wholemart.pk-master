import { RouterProvider } from 'react-router-dom';
import { CustomThemeProvider } from './theme/Theme';
import router from './routes';

function App() {
  return (
    <CustomThemeProvider>
      <RouterProvider router={router} />
    </CustomThemeProvider>
  );
}

export default App;