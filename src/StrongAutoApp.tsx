import StrongAutoLayout from 'components/layout/StrongAutoLayout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from 'routes';

const StrongAutoApp: React.FC = () => {
  return (
    <StrongAutoLayout>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </StrongAutoLayout>
  );
};

export default StrongAutoApp;
