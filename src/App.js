import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import InstaList from "./InstaList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          image:
            "https://instagram.fsgn2-1.fna.fbcdn.net/t51.2885-15/s750x750/sh0.08/e35/23596260_1506953159388739_8939936794120552448_n.jpg",
          caption:
            "Find bursts of colour (and a little bit of magic) in the streets of Hanoi. 🏮🏮🏮Tag #visitvietnam to share your experience.",
            likes: 74
        },
        {
          id: 2,
          image:
            "https://instagram.fsgn2-1.fna.fbcdn.net/t51.2885-15/sh0.08/e35/p640x640/23417246_361939134255145_2850892153125601280_n.jpg",
          caption:
            "Stay at a beach bungalow in Ha Long Bay! Tag #visitvietnam to share your experiences.",
            likes: 123
        },
        {
          id: 3,
          image:
            "https://instagram.fsgn2-1.fna.fbcdn.net/t51.2885-15/s320x320/e35/c177.0.725.725/22860817_1884570681557485_8923925984969752576_n.jpg",
          caption:
            "Lost in the rice fields of Sapa. Tag #visitvietnam to share your experience!",
            likes: 24
        }
      ]
    };
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
        <InstaList posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
