import './App.css';
import React from "react";
import Notifications from '../Notifications/Notifications';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App () {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
