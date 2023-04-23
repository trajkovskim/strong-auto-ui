import StrongAutoApp from 'StrongAutoApp';
import 'index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const rootNode = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <BrowserRouter>
      <StrongAutoApp />
    </BrowserRouter>
  </React.StrictMode>
);
