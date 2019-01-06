import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <Routes />
      </div>
    );
  }
}

export default App;
