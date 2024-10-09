import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <section>
        <div class="title">
          <h3>Key Skills</h3>
        </div>
        <div style={{display: "flex"}}>
          <div class="Skills">
            <p>{this.props.skills.skill1}</p>
            <p>{this.props.skills.skill2}</p>
            <p>{this.props.skills.skill3}</p>
          </div>
          <div class="Skills">
            <p>{this.props.skills.skill4}</p>
            <p>{this.props.skills.skill5}</p>
            <p>{this.props.skills.skill6}</p>
          </div>
          <div class="Skills">
            <p>{this.props.skills.skill7}</p>
            <p>{this.props.skills.skill8}</p>
            <p>{this.props.skills.skill9}</p>
          </div> 
        </div>
      </section>
    );
  }
}

export default Skills;