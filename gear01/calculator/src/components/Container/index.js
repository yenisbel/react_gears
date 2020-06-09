import React, { Component } from 'react';
import Digits from '../Digits';
import './index.css';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    };
  }

  onChangeDisplay = event => {
    this.setState({ display: event.target.value });
  };

  reset = () => {
    this.setState({ display: '' });
  };

  backspace = () => {
    this.setState({
      display: this.state.display.slice(0, -1)
    });
  };

  calculate = () => {
    this.setState({
      display: (eval(this.state.display) || '') + ''
    });
  };

  onClick = button => {
    if (button === '=') {
      this.calculate();
    } else if (button === 'C') {
      this.reset();
    } else if (button === 'CE') {
      this.backspace();
    } else {
      this.setState({
        display: this.state.display + button
      });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display-container">
          <h2 className="display-text">{this.state.display}</h2>
        </div>
        <div className="secondary-row-container">
          <div className="digits-container">
            <div className="digits-row">
              <Digits className="operator" digitNumnber={'C'} onSelectDigit={this.onClick} />
              <Digits className="operator" digitNumnber={'CE'} onSelectDigit={this.onClick} />
              <Digits className="operator" digitNumnber={'/'} onSelectDigit={this.onClick} />
            </div>
            <div className="digits-row">
              <Digits digitNumnber={7} onSelectDigit={this.onClick} />
              <Digits digitNumnber={8} onSelectDigit={this.onClick} />
              <Digits digitNumnber={9} onSelectDigit={this.onClick} />
            </div>
            <div className="digits-row">
              <Digits digitNumnber={4} onSelectDigit={this.onClick} />
              <Digits digitNumnber={5} onSelectDigit={this.onClick} />
              <Digits digitNumnber={6} onSelectDigit={this.onClick} />
            </div>
            <div className="digits-row">
              <Digits digitNumnber={1} onSelectDigit={this.onClick} />
              <Digits digitNumnber={2} onSelectDigit={this.onClick} />
              <Digits digitNumnber={3} onSelectDigit={this.onClick} />
            </div>
            <div className="digits-row">
              <Digits
                className="streched"
                digitNumnber={0}
                onSelectDigit={this.onClick}
              />
              <Digits digitNumnber={'.'} onSelectDigit={this.onClick} />
            </div>
          </div>
          <div className="operations-container">
            <Digits className="operator" digitNumnber={'*'} onSelectDigit={this.onClick} />
            <Digits className="operator" digitNumnber={'+'} onSelectDigit={this.onClick} />
            <Digits className="operator" digitNumnber={'-'} onSelectDigit={this.onClick} />
            <Digits
              className="streched operator"
              digitNumnber={'='}
              onSelectDigit={this.onClick}
            />
          </div>
        </div>
      </div>
    );
  }
}