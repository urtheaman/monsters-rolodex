import React, { Component, Fragment } from "react";
import CardList from "./components/CardList.comp";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monster: data }));
  }

  render() {
    return (
      <Fragment>
        <div>
          <h1>Monsters Rolodex</h1>
        </div>
        <CardList monster={this.state.monster} />
      </Fragment>
    );
  }
}
