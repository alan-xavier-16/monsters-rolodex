import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: []
    };
  }

  /* Fetches users from URL below, and sets the state with the users */
  async componentDidMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    this.setState({ monsters: users });
  }

  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        {monsters.map((monster, idx) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
