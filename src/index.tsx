import StrongAutoApp from 'StrongAutoApp';
import 'index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

const rootNode = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <StrongAutoApp />
  </React.StrictMode>
);
