import React, { Component } from "react";
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  /* Fetches users from URL below, and sets the state with the users */
  async componentDidMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    this.setState({ monsters: users });
  }

  /* This syntax BINDS the this keyword to the App context */
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    /* Filtering the monsters array, if text in searchField is in the name of the monsters */
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
