import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    /** this.sate holds an object of monster that has an array of objects */
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <h1>Monsters Name</h1>
        {this.state.monsters.map((monster) => (
          <h2 key={monster.id}>{monster.name}</h2>
        ))}
      </div>
    );
  }
}
export default App;
