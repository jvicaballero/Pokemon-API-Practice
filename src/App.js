import React, {Component } from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./components/pokemon"

class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>ReactJs with APIS</h1>
      <Pokemon pokemon="ditto"/>
      <Pokemon pokemon="pikachu"/>
      <Pokemon pokemon="mewtwo"/>
      <Pokemon pokemon="me"/>
    </div>
  );
  }
}

export default App;
