import React, { Component } from 'react';
import "./App.css";
import Header from './js/header';
import Education from './js/education';
import Profile from './js/personalProfile';
import Skills from './js/skills';
import Experience from './js/workExperience';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personInfo:{
        name: "Zh Rimel",
        occupation: "Data Scientist"
      },
      contactInfo: {
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890"
      },
      intro: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      work: {
        job1: {
          title: "Job Title at Company (August 2022 – December 2023)",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        job2: {
          title: "Job Title at Company 2 (August 2020 – December 2021)",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      },
      skills: {
        skill1: "A key Skill",
        skill2: "A key Skill",
        skill3: "A key Skill",
        skill4: "A key Skill",
        skill5: "A key Skill",
        skill6: "A key Skill",
        skill7: "A key Skill",
        skill8: "A key Skill",
        skill9: "A key Skill"
      },
        // Would have more skill sets but not needed for scope of assignment
      education: {
        edu1: {
          school: "New Jersey Institute of Technology",
          degree: "BS in Computer Science",
          year: "2018 - 2022",
          gpa: "GPA: 3.9"
        },
        edu2: {
          school: "New Jersey Institute of Technology",
          degree: "MS in Data Science",
          year: "2022 - 2023",
          gpa: "GPA: 3.9"
        }
      }
    }
  }
  render() {
    return (
      <div>
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
        <Profile intro={this.state.intro}></Profile>
        <Experience work={this.state.work}></Experience>
        <Skills skills={this.state.skills}></Skills>
        <Education education={this.state.education}></Education>
      </div>
    );
  }
}
export default App;