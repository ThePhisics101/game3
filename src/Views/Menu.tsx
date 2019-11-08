import React from "react";

import "./Menu.scss";

export default class Menu extends React.Component {
  render() {
    return <div className="menu">
      <div className="title"><h1>Game 3</h1></div>
      <div className="title-btns">
        <button>Join game</button>
        <button>Create game</button>
        <button>Settings</button>
      </div>
      <div className="footer">
        Created by <a href="http://thephisics101.eu">ThePhisics101</a> during Nov-Dec 2019
      </div>
    </div>;
  }
}