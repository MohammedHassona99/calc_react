import React from "react";
import "./style.css";
class Header extends React.Component {
  render() {
    const { total } = this.props;
    return (
      <div>
        <span>{total}</span>
      </div>
    );
  }
}
export default Header;
