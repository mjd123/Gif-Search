import React, { Component } from 'react';
import './App.css';
import Searchbar from '../Searchbar/Searchbar.js';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="App">
          <Searchbar></Searchbar>
        </div>
      </Container>
    );
  }
}

export default App;
