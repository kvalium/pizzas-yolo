import React, { Component } from "react";

import ErrorPage from "./ErrorPage";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errMessage: undefined
    };
  }

  /**
   *
   * @param {Error} error Error event
   */
  static getDerivedStateFromError(error) {
    return { errMessage: error.message };
  }

  render() {
    const { errMessage } = this.state;
    if (errMessage) {
      return <ErrorPage message={errMessage} />;
    }
    return <>{this.props.children}</>;
  }
}
