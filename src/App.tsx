import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './frontent/layout';
import HomePage from './frontent/pages/Home/page';
import LettersOfCreditPage from './frontent/pages/LettersOfCreditPage/page';
import TradeFinancePage from './frontent/pages/Trade-Finance/page';
import BankingSolutionsPage from './frontent/pages/Banking-Solutions/page';
import AboutPage from './frontent/pages/About/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/letters-of-credit',
        element: <LettersOfCreditPage />,
      },
      {
        path: '/trade-finance',
        element: <TradeFinancePage />,
      },
      {
        path: '/banking-solutions',
        element: <BankingSolutionsPage />,
      },
      // Add a catch-all route
      {
        path: '*',
        element: <div>404 - Page Not Found</div>, // Or create a NotFound component
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;