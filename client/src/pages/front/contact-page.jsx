import React, { Component } from 'react'
import Layout from '../../components/shared/layout'
import axios from "axios";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Submit"
    };
  }
  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Sending" });
    axios({
      method: "POST",
      url: "http://localhost:5000/contactus",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Message Sent");
        this.setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }
  render() {
    let buttonText = this.state.status;

    return (
      <Layout>
        <div className="sign-up">
          <div class="container has-background-light">
            <h2 class="title is-2 is-capitalized">Contact Us</h2>
            <form onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div class="field">
                <label htmlFor="name" class="label is-size-4 has-text-weight-light">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleChange.bind(this)}
                  class="input" placeholder="Name" autofocus
                  required
                />
                <span class="icon is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <div class="field">
                <label htmlFor="email" class="label is-size-4 has-text-weight-light">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange.bind(this)}
                  class="input" placeholder="Email"
                  required
                />
                <span class="icon is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <div class="field">
                <label htmlFor="message" class="label is-size-4 has-text-weight-light">Message:</label>
                <textarea
                  id="message"
                  value={this.state.message}
                  onChange={this.handleChange.bind(this)}
                  class="textarea is-medium" placeholder="Message"
                  required
                />
              </div>
              <button type="submit" class="button is-success is-size-5">{buttonText}</button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}


export default ContactForm;