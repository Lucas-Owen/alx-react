import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import "./index.css";

import { listNotifications } from './utils/utils';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import { uiReducer } from './reducers/uiReducer';
import { thunk } from "redux-thunk";

const middlewares = applyMiddleware(thunk)
const store = createStore(uiReducer, middlewares);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App listNotifications={listNotifications} />
    </Provider>
  </React.StrictMode>
);

