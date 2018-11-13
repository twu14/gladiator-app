import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./menu.jsx";

class App extends Component {
  handleAddGladiator = () => {
    alert("adding gladiator!");
  };

  render() {
    return (
      <div className="App">
        <Menu onAddGladiator={this.handleAddGladiator} />
      </div>
    );
  }
}

export default App;
