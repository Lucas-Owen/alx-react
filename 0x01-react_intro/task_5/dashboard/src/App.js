import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    `<div class="App">
      <div class="App-header">
        <img src="./holberton-logo.jpg" class="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div class="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email</label>
        <input type="email" name="email" id="email"/>
        <label for="password">Password</label>
        <input type="password" name="password" id="password"/>
        <button>OK</button>
      </div>
      <div class="App-footer">Copyright ${getFullYear()} - ${getFooterCopy()}</div>
    </div>`
  );
}

export default App;
