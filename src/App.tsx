import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Menu from "./Views/Menu";
import Settings from "./Views/Settings";
import Lobby from "./Views/Lobby";
import Join from "./Views/Join";
import Create from "./Views/Create";
import Play from "./Views/Play";

import "./App.scss";

export default class App extends React.Component {
  render() {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Menu}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/lobby" component={Lobby}/>
        <Route path="/create" component={Create}/>
        <Route path="/settings" component={Lobby}/>
        <Route path="/join/:id" component={Join}/>
        <Route path="/play/:id" component={Play}/>
        <Route render={() => <h1>404</h1>}/>
      </Switch>
    </BrowserRouter>;
  }
}