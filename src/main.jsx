import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Component/RootLayout/RootLayout.jsx';
import Timeline from './Component/Timeline/Timeline.jsx';
import States from './Component/States/States.jsx';
import Homepage from './Component/Homepage/Homepage.jsx';
import NotFound from './404Error/NotFound.jsx';
import Banner from './Component/Banner/Banner.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      },
      {
        path: '/timeline',
        element:<>
        <Banner></Banner> <Timeline></Timeline>
        </>
      },
      {
        path: '/states',
        element: <States></States>
      },{
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
