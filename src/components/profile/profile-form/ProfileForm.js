import React from "react";
import classes from "./ProfileForm.module.css";

class ProfileForm extends React.Component {
  state = {
    name: "",
    surname: "",
    email: "",
    textarea: ""
  };

  handleInputs = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  simulateRequest = () => {
    const name = this.state.name;
    const surname = this.state.surname;
    if (!isNaN(Number(name)) && !isNaN(Number(surname))) {
      window.alert("Invalid data type in name and surname fields");
    } 
    else {
      this.setState({
        name: "",
        surname: "",
        email: "",
        textarea: ""
      });

      window.alert(`Request was sent successfuly!`);
    }
  };

  render() {
    return (
      <div className={classes.FormWrapper}>
        <h2>Fill form below to leave your profile order</h2>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.simulateRequest();
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={this.state.name}
            onChange={this.handleInputs}
            required
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={this.state.surname}
            required
            onChange={this.handleInputs}
          />
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={this.state.email}
            required
            onChange={this.handleInputs}
          />
          <label htmlFor="text-field">More details</label>
          <textarea
            name="textarea"
            value={this.state.textarea}
            rows="10"
            cols="10"
            id="text-field"
            onChange={this.handleInputs}
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default ProfileForm;
