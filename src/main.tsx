// src/main.tsx
import './index.css'
import './styles/responsive-fixes.css'
import './styles/responsive-utils.css'
import './styles/animation.css'

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Rules from './pages/Rules';
import JoinUs from './pages/JoinUs';
import About from './pages/About';
import Staff from './pages/Staff';
import Gallery from './pages/Gallery';
import RootLayout from './components/RootLayout';
import { ViewportProvider } from './contexts/ViewportContext';
import VideoDebug from './components/VideoDebug';
import VideoTestPage from './pages/VideoTestPage';

// Define the router with TypeScript
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "rules",
        element: <Rules />,
      },
      {
        path: "join",
        element: <JoinUs />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "staff",
        element: <Staff />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
  // Add a standalone debug route
  {
    path: "/debug-video",
    element: <VideoDebug />,
  },
  {
    path: "/video-test",
    element: <VideoTestPage />,
  }
]);

// Add non-null assertion for getElementById since TypeScript needs this guarantee
const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ViewportProvider>
      <RouterProvider router={router} />
    </ViewportProvider>
  </React.StrictMode>
);