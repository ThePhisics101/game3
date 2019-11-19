import React from "react";
import { RouteComponentProps } from "react-router-dom";

export default class Join extends React.Component<RouteComponentProps<{id: string}>> {
  render() {
    return <div className="join">
      <h1>Join game #{this.props.match.params.id}</h1>
      name: <input type="text"/>
      controls: <select/>
      control preview: []
      ship: <select/>
      ship stats: [], preview
      {/*CONSIDER: Show game on screen*/}
    </div>;
  }
}