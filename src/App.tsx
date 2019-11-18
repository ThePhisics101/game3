import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import Menu from "./Views/Menu";
import Settings from "./Views/Settings";
import Join from "./Views/Join";
import Create from "./Views/Create";
import Play from "./Views/Play";

import "./App.scss";

export const classMap = (...classes: (any)[]): string|undefined => {
  let out = "";
  for (const c of classes)
    if (Array.isArray(c)) out = classMap(out, ...c) || "";
    else if (c) out += " " + c;
  return out.trim() || undefined;
};


export default class App extends React.Component {
  render() {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route render={({location}) => <TransitionGroup className="router-switch-container">
        <CSSTransition key={location.key} timeout={100} classNames="router-switch">
          <Switch location={location}>
            <Route path="/" exact component={Menu}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/create" component={Create}/>
            <Route path="/join/:id" component={Join}/>
            <Route path="/play/:id" component={Play}/>
            <Route render={() => <h1>404</h1>}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>}/>
    </BrowserRouter>;
  }
}