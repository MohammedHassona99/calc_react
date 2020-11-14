import React, { Component } from 'react'

export default class Bill extends Component {
 state = {
  name : ''
 };

 changeName = e =>{
  const { value } = e.target;
  this.setState({name : value})
 }

 render() {
const { name } = this.state;
const { amount } = this.props;
  return (

   <div>
    <input type="text" name="name" id="name" onClick={this.changeName}/>
    <p className="bill">
     mohammed own { name } an amount of { amount } shikle
    </p>
   </div>
  )

 }
}
