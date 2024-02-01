import './App.css';
import React from "react"
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src="./holberton-logo.jpg" className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email</label>
        <input type="email" name="email" id="email"/>
        <label for="password">Password</label>
        <input type="password" name="password" id="password"/>
        <button>OK</button>
      </div>
      <div className="App-footer">Copyright {getFullYear()} - {getFooterCopy()}</div>
    </div>
  );
}

export default App;
