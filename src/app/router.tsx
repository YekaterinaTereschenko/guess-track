import { createBrowserRouter } from 'react-router'
import HomePage from "../pages/HomePage";
import Layout from "./Layout";
import RatingPage from '../pages/RatingPage';
import GamePage from '../pages/GamePage';
import SettingsPage from '../pages/SettingsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'rating', element: <RatingPage /> },
      { path: 'game', element: <GamePage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
])