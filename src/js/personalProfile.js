import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <section>
        <div class="title">
          <h3>Personal Profile</h3>
        </div>
        <div>
          <p>{this.props.intro.text}</p>
        </div>
      </section>
    );
  }
}

export default Profile;