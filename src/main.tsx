import React from 'react';
import ReactDOM from 'react-dom/client';
import MainProfile from './components/profile';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainProfile config={CONFIG} />
  </React.StrictMode>,
);
