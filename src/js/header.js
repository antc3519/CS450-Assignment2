import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div style={{float: "left"}}>
          <h2 style={{margin:"0"}}>{this.props.personInfo.name}</h2>
          <h3 style={{margin:"0"}}>{this.props.personInfo.occupation}</h3>
        </div>
        <div style={{float: "right"}}>
          <p>Email: {this.props.contactInfo.email}<br></br>
          Web: {this.props.contactInfo.web}<br></br>
          Mobile: {this.props.contactInfo.mobile}</p>
        </div>
      </header>
    );
  }
}

export default Header;