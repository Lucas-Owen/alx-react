import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import Notification from './Notifications/Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="root-notifications">
      <Notification />
    </div>
    <App />
  </React.StrictMode>
);

