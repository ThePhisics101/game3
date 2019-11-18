import React from "react";

import "./Modal.scss"
import {classMap} from "../App";

interface Props {
  onClose(): any
  open: boolean
  children: any
}

export default class Modal extends React.Component<Props, {fading: boolean}> {
  private body: HTMLDivElement | null = null;
  state = {fading: false};
  private timeout: NodeJS.Timeout | undefined;

  componentWillUnmount(): void {
    if (this.timeout) clearTimeout(this.timeout);
  }

  render() {
    if (!this.props.open) return null;
    return <div className={classMap("__modal", this.state.fading && "fading")} onClick={(e) => {
      if (!this.body) return;
      if (this.body.contains(e.target as Node)) return;
      this.setState({fading: true}, () => this.timeout = setTimeout(() => {
        this.setState({fading: false});
        this.props.onClose();
      }, 200));
    }}>
      <div className="modal" ref={r => {
        if (!this.body && r) {
          let elem = r.querySelector("input,button") as HTMLElement;
          if (elem) {
            elem.blur();
            elem.focus();
          }
        }
        this.body = r;
      }}>{this.props.children}</div>
    </div>;
  }
}