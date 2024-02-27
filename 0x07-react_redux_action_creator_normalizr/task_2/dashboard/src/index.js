import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import "./index.css"


import { listNotifications } from './utils/utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App listNotifications={listNotifications}/>
  </React.StrictMode>
);

