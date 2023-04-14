import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from 'routes';
import StrongAutoLayout from 'components/layout/StrongAutoLayout';

const router = createBrowserRouter(routes);

const StrongAutoApp: React.FC = () => {
  return (
    <StrongAutoLayout>
      <RouterProvider router={router} />
    </StrongAutoLayout>
  );
};

export default StrongAutoApp;
