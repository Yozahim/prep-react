import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list'
import {SearchBox} from './components/search-box/search-box'
import './style.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
    // this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {console.log(users); this.setState({monsters: users})})
  }

  handleChange = (text) => {
    this.setState({searchField: text.target.value})
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
      <h1>Monsters</h1>
        <SearchBox handleChange={this.handleChange} placeholder="search monster..."></SearchBox>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
