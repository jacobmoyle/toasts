import React, { Component } from "react";
import "./Toast.css";

export default class Toast extends Component {
  constructor() {
    super();

    this.state = {
      show: false
    };
  }

  dismiss() {
    this.setState({
      show: false
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.toast.status) {
      this.setState({
        show: true
      });
    }
  }

  render() {
    const { toast } = this.props;

    let contentClass = "toast-content";

    if (toast.status) {
      contentClass += ` ${toast.status}`;
    }

    return (
      <div className="toast-wrapper">
        {this.state.show && (
          <button
            type="button"
            className={contentClass}
            onClick={() => this.dismiss()}
          >
            {toast.text.toUpperCase()}
          </button>
        )}
      </div>
    );
  }
}
