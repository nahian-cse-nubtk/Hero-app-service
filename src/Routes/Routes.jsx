import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Components/Root/Root';
import ErrorPage from '../Components/ErrorPage'
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import AppDetails from '../Components/AppDetails/AppDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true, Component: Home, path: '/',
        loader: ()=>fetch('/AppData.json')
      },
      {
        path: '/apps',
        Component: Apps,
        loader: ()=>fetch('/AppData.json')
      },
      {
        path: '/AppCard/:id',
        Component: AppDetails,
        loader: ()=>fetch('/AppData.json')

      }
    ]

  },
]);
