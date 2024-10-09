import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <section>
        <div class="title">
            <h3>Work Experience</h3>
        </div>
        <div>
            <div>
              <h3>{this.props.work.job1.title}</h3>
              <p>{this.props.work.job1.text}</p>
            </div>
            <div>
              <h3>{this.props.work.job1.title}</h3>
              <p>{this.props.work.job1.text}</p>
            </div>
        </div>
      </section>
    );
  }
}

export default Experience;