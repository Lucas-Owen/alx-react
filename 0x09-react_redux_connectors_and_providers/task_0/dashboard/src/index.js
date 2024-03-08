import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import "./index.css";

import { listNotifications } from './utils/utils';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { uiReducer } from './reducers/uiReducer';

const store = createStore(uiReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App listNotifications={listNotifications} />
    </Provider>
  </React.StrictMode>
);

