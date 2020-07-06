import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list'
import './style.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [
      ],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {console.log(users); this.setState({monsters: users})})
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
