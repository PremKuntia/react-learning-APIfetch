import React, { Component } from "react";
import { CardList } from "./card-list/card-list.component";
import { SearchBox } from "./searchbox/searchbox.component.jsx";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    /** this.sate holds an object of monster that has an array of objects */
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="main-heading">Monsters Rolodex</h1>

        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
