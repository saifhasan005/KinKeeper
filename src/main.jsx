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
import FriendDetails from './Component/FriendDetails/FriendDetails.jsx';
import FriendContext from './Context/FriendContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      },
      {
        path: '/timeline',
        element: <Timeline></Timeline>
      },
      {
        path: '/states',
        element: <States></States>
      }, {
        path: '/friendDetails/:id',
        element: <FriendDetails />
      }
    ],
    errorElement: <NotFound></NotFound>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <FriendContext>
      <RouterProvider router={router}></RouterProvider>
    </FriendContext>
  </StrictMode>,
)
