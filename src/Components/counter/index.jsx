import React, { Component } from "react";
import "./counter.css";
export default class Counter extends Component {
  render() {
    const { counter, increment, decrement } = this.props;
    return (
      <div className="counter">
        <span>{counter.value}</span>
        <button 
        className="increment" 
        onClick={() => increment(counter.id)}>
          +
        </button>
        <button
          className="decrement"
          onClick={() => decrement(counter.id)}
          disabled={counter.value === 0 ? "disabled" : ''}
        >
          -
        </button>
      </div>
    );
  }
}
