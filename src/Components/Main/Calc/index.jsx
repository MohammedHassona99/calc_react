import React from "react";
import './style.css';
export default function Calc(props) {

  const { amount, updateAmount, resetAmount } = props;
  const dollarRatio = 3.4;

  return (
    <div style={{backgroundColor : '#ccc', padding : '20px', margin : '20px'}}>
      <label for="amount">Dollar Amount</label>
      <input type="number" name="amount" id="amount" onChange={updateAmount} />
      <button onClick={resetAmount}>X</button>
      <div className="output">
       <span>{amount}</span>
       <span>{amount * dollarRatio}</span>
      </div>
    </div>
  );

}
