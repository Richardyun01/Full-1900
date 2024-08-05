import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "male",
      subjects: {
        english: true,
        maths: false,
        physics: false,
      },
      resume: "",
      url: "",
      selectedOption: "",
      about: ""
    };
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleSubjectChange = (sub) => {
    this.setState(prevState => ({
      subjects: {
        ...prevState.subjects,
        [sub]: !prevState.subjects[sub]
      }
    }));
  };

  handleReset = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "male",
      subjects: {
        english: true,
        maths: false,
        physics: false,
      },
      resume: "",
      url: "",
      selectedOption: "",
      about: ""
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <h1>Form in React</h1>
        <Form 
          formData={this.state}
          handleChange={this.handleChange}
          handleSubjectChange={this.handleSubjectChange}
          handleReset={this.handleReset}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
