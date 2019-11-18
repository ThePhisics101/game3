import React from "react";

import "./Menu.scss";
import Modal from "../Components/Modal";
import {Link} from "react-router-dom";

interface State {
  modal: boolean
}

export default class Menu extends React.Component<{}, State> {
  state: State = {
    modal: false
  };

  render() {
    return <div className="menu">
      <div className="title"><h1>Game 3</h1></div>
      <div className="title-btns">
        <div>
          <button onClick={() => {this.setState({modal: true})}}>Join game</button>
          <Link to="/create" className="btn">Create game</Link>
          <Link to="/settings" className="btn">Settings</Link>
        </div>
      </div>
      <div className="footer">
        Created by <a href="http://thephisics101.eu">ThePhisics101</a> during Nov&#8209;Dec&nbsp;2019
      </div>
      <Modal onClose={() => this.setState({modal: false})} open={this.state.modal}>
        <form action={`/join/${1}`}>
          <input type="number"/>
          <button>Join game</button>
        </form>
      </Modal>
    </div>;
  }
}