// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { RouteObject } from 'react-router-dom';
import Home from './pages//home/Home';

type CustomRouteObject = RouteObject & {
  path: '/';
};

const routes: CustomRouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];

export default routes;
