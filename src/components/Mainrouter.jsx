/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

export default function Router() {
  return createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
    },
  ]);
}
