import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = { something: null };

  handleClick = () => {
    import("./something").then(something => {
      this.setState({ something: something.default });
    }) ;
  }

  render() {
    return (
      <div className="App" onClick={this.handleClick}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Zocdoc</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.something}
      </div>
    );
  }
}

export default App;
