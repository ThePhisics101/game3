import React from "react";

import "./Modal.scss"

interface Props {
  onClose(): any
  open: boolean
  children: any
}

export default class Modal extends React.Component<Props> {
  render() {
    if (!this.props.open) return null;
    return <div className="modal" onClick={this.props.onClose}>
      <div className="modal-body">{this.props.children}</div>
    </div>;
  }
}