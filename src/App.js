import React, { Component } from 'react';
import './App.css';
import Search from './components/search/search'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Weather App</h1>
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
