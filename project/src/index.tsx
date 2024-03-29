import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { userEmail, offers, reviews } from './mocks/mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offers={offers} userEmail={userEmail} reviews={reviews} />
  </React.StrictMode>,
);
