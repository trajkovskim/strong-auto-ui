import React from 'react';
import { Autoshop, Home } from 'pages';
import { RouteObject } from 'react-router-dom';

type CustomRouteObject = RouteObject & {
  path: '/' | '/favorites' | '/autoshop';
};

const routes: CustomRouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/favorites',
    element: <Home />,
  },
  {
    path: '/autoshop',
    element: <Autoshop />,
  },
];

export default routes;
