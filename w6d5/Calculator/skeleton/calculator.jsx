import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0, num1: "", num2: "" };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    e.preventDefault();
    if (e.target.value === "") {
      this.setState({ num1: "" });
    } else {
      const input = parseInt(e.target.value);
      this.setState({ num1: input });
    }
  }

  setNum2(e) {
    e.preventDefault();
    if (e.target.value === "") {
      this.setState({ num2: "" });
    } else {
      const input = parseInt(e.target.value);
      this.setState({ num2: input });
    }
  }

  add(e) {
    this.setState({ result: this.state.num1 + this.state.num2 });
  }

  subtract(e) {
    this.setState({ result: this.state.num1 - this.state.num2 });
  }

  multiply(e) {
    this.setState({ result: this.state.num1 * this.state.num2 });
  }

  divide(e) {
    this.setState({ result: this.state.num1 / this.state.num2 });
  }

  clear(e) {
    this.setState({ result: 0, num1: "", num2: "" });
  }

  render() {
    const { result, num1, num2 } = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input onChange={this.setNum1} type="text" value={num1} />
        <input onChange={this.setNum2} type="text" value={num2} />
        <input onClick={this.clear} type="submit" value="Clear" />
        <br />
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Calculator;
