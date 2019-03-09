import React, { Component } from 'react';
import Board from './Board.js';
import {observe} from './Game.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    knightPosition:[0,0],
  }
}
componentDidMount(){
  
  observe((position) => {
    this.setState({
      knightPosition:position
    });
  })
}

  render() {
    return (
      <div className="App">
        <Board  knightPosition={this.state.knightPosition}></Board>
      </div>
    );
  }
}

export default App;
