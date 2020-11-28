import React, { Component } from "react";

export class Rest extends Component {
  render() {
    const { reset } = this.props;
    return <button onClick={reset}>reset</button>;
  }
}

export default Rest;
