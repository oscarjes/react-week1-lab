import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import InstaContainer from "./InstaContainer";
// import InstaList from "./InstaList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const key = "token";
    console.log("mounted");
    const existingToken = sessionStorage.getItem(key);
    console.log(existingToken);
    const accessToken = window.location.hash.split("=")[1];
    console.log(accessToken);
    const oauthUrl =
      "https://www.instagram.com/oauth/authorize/?client_id=ba2fd66784434418b6f3fd11a53303d6&redirect_uri=http://localhost:3000&response_type=token";

    if (!accessToken && !existingToken) {
      window.location.replace(oauthUrl);
    }

    if (accessToken) {
      console.log(`New access token: ${accessToken}`);
      sessionStorage.setItem(key, accessToken);
      this.setState({
        token: accessToken
      });
    }

    if (existingToken) {
      this.setState({
        token: existingToken
      });
    }
  }

  toggleTitle = () => {
    const newState = this.state.title ? null : "Toggled state";
    this.setState({
      title: newState
    });
  };

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
        <InstaContainer token={this.state.token} />
      </div>
    );
  }
}

export default App;
