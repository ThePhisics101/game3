import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";

import Modal from "../Components/Modal";

import "./Menu.scss";

export default function Menu() {
  const [modal, setModal] = useState(false);
  const [redirect, redirectTo] = useState<string|undefined>(undefined);
  const [code, setCode] = useState<undefined|number>();

  return <div className="menu">
    <div className="title"><h1>Game 3</h1></div>
    <div className="title-btns">
      <div>
        <button onClick={() => setModal(true)}>Join game</button>
        <Link to="/create" className="btn">Create game</Link>
        <Link to="/settings" className="btn">Settings</Link>
      </div>
    </div>
    <div className="footer">
      Created by <a href="http://thephisics101.eu">ThePhisics101</a> during Nov&#8209;Dec&nbsp;2019
    </div>
    <Modal onClose={() => setModal(false)} open={modal}>
      <form onSubmit={e => {
        e.preventDefault();
        redirectTo(`/join/${code}`)
      }}>
        <input type="number" value={code} onChange={({target: {value}}) => setCode(parseInt(value))}/>
        <button>Join game</button>
      </form>
    </Modal>
    {redirect ? <Redirect push to={redirect}/> : undefined}
  </div>;
}