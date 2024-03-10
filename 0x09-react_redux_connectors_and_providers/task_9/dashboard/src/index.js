import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import "./index.css";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { thunk } from "redux-thunk";

const middlewares = applyMiddleware(thunk);
const composeEnhancers = composeWithDevTools({actionCreators: middlewares, trace: true});
const store = createStore(rootReducer, composeEnhancers(middlewares));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

