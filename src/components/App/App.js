import React, { Component, useState, useEffect } from 'react';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Example />
      </div>
    );
  }
}


function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
