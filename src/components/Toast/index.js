import React, { Component } from "react";
// TODO: Utilize Proptypes?
// import PropTypes from "prop-types";
import "./Toast.css";

export default class Toast extends Component {
  render() {
    const { toast, close } = this.props;

    return (
      <div className="Toast-container">
        {toast.status && (
          <section>
            {toast.status}
            <button type="button" onClick={() => close()}>
              X
            </button>
          </section>
        )}
      </div>
    );
  }
}
