import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  toggleTitle = () => {
    const newState = this.state.title ? null : 'Toggled state';
    this.setState({
      title: newState
    });
  }

  render() {
    console.log("Good Evening!");
    return (
      <div className="App">
        <header className="App-header">
          <a href="#" onClick={this.toggleTitle}>
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <h1 className="App-title">{this.state.title || this.props.title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
