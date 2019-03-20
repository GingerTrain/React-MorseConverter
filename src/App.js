import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import xmorse from 'xmorse';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Enter your morse code or text to be converted below!</h3>
          <MorseConverter />
        </header>
      </div>
    );
  }
}

class MorseConverter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      outputValue: ""
    };
  }

  render() {
    return(
      <React.Fragment>
        <input type="text" value={this.state.inputValue} onChange={e => this.updateOutputValue(e)}></input>
        <p>{this.state.outputValue}</p>
      </React.Fragment>
    );
  }

  updateOutputValue(e) {
    if(e.target.value[0] === '.' || e.target.value[0] === '-') {
      this.setState({
        inputValue: e.target.value,
        outputValue: xmorse.decode(e.target.value)
      });
    } else {
      this.setState({
        inputValue: e.target.value,
        outputValue: xmorse.encode(e.target.value)
      });
    }
  }
}

export default App;
