import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <section>
        <div class="title">
          <h3>Education</h3>
        </div>
          <div>
            <h3>{this.props.education.edu1.school}</h3>
            <p>{this.props.education.edu1.degree}<br></br>
            {this.props.education.edu1.year}<br></br>
            {this.props.education.edu1.gpa}</p>
            <h3>{this.props.education.edu2.school}</h3>
            <p>{this.props.education.edu2.degree}<br></br>
            {this.props.education.edu2.year}<br></br>
            {this.props.education.edu2.gpa}</p>
        </div>
      </section> 
    );
  }
}

export default Education;