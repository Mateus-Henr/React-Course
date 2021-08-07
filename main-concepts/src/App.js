import React, { Component } from "react";
import Clock from "./clock";
import "./App.css";

class App extends Component {
  state = {
    person: {
      id: 1,
      firstName: "Mateus",
      middleName: "Henrique Vieira",
      lastName: "Figueiredo",
    },

    greetings: ["Hi", "Hello", "Hey"],

    imgUrl1:
      "https://www.flaticon.com/svg/vstatic/svg/877/877665.svg?token=exp=1620095829~hmac=4474bb8125890ed3bd5d5f306b731652",
    imgUrl2:
      "https://www.flaticon.com/svg/vstatic/svg/2699/2699586.svg?token=exp=1620095829~hmac=d03481c5f5a9c62aafe799e15af42c82",
    imgUrl3:
      "https://www.flaticon.com/svg/vstatic/svg/3483/3483082.svg?token=exp=1620095898~hmac=4f9a5f7ca34c983ca77e8faf73878d1e",

    currentTime: new Date().toLocaleTimeString(),
  };

  constructor(props) {
    super(props);
    this.formatUser = this.formatUser.bind(this);
  }

  chooseGreeting() {
    const { greetings } = this.state;
    const random = Math.floor(Math.random() * greetings.length);
    return greetings[random];
  }

  formatUser(user) {
    const { firstName, middleName, lastName } = this.state.person;

    return firstName + " " + middleName + " " + lastName;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.imgUrl3} className="App-logo" alt="logo" />
          <p>
            {this.chooseGreeting()} {this.formatUser(this.state.person)}!
          </p>
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
