import React, { Component, useState, useEffect } from 'react';

import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleAdd = () => {
    this.setState((prev) => {
      return {
        count: prev.count + 1
      }
    })
  }
  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <h3>Class state</h3>
        <div>You clicked {count} times</div>
        <div onClick={this.handleAdd}>Add</div>
        <h3>Function state</h3>
        <Example />
      </div>
    );
  }
}


function Example() {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <p onClick={() => setCount(count + 1)}>
        Add
      </p>
    </div>
  );
}
