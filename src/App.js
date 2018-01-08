import React, { Component } from 'react';
//import Block from './components/Block.js';
import TowersVisuals from './components/TowersVisuals.js';
import {buildMatrix} from './utils/buildMatrixUtils.js';
//stubs
//var A = [2,3,6,2,3,1,7,3,2,2];
//var B = [2,5,1,2,3,4,7,7,6];
var C = [4,2,4,2,4];//[2,4,1,5];

class App extends Component {
  onBuildClick(){

  }
  render() {
    const result = buildMatrix(C);
    return (
      <div className="App">
        <TowersVisuals matrix={result.matrix}/>
        <input type='text'/>
        <button onClick={this.onBuildClick.bind(this)}>Build towers</button>
        <div>Total puddle volume is <b>{result.volume}</b></div>
      </div>
    );
  }
}

export default App;
