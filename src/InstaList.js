import React from "react";
import InstaPost from "./InstaPost";
import logo from "./logo.svg";

export default class InstaList extends React.Component {
  render() {
    const posts =
      this.props.posts &&
      this.props.posts.map(post => {
        // return <img src={post.image} />;
        return <InstaPost {...post} />;
      });
    return (
      <div>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          hidden={!this.props.loading}
        />
        {posts}
      </div>
    );
  }
}
