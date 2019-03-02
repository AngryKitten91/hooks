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
        <p>You clicked {count} times</p>
        <p className="btn" onClick={this.handleAdd}>Add</p>
        <h3>Function state</h3>
        <Example />
      </div>
    );
  }
}


function Example() {
  
  const [counter, setCount] = useState(0);
  const [todos, setTodos] = useState(['item1']);
  const [input, setInput] = useState('');

  const add = () => setCount(counter + 1)
  const subtract = () => setCount(counter - 1)

  const addTodo = (item) =>{
    if(item !== ''){
      setTodos([...todos, item])
      setInput('')
    }
  }

  const handleInput= (e) =>{
    setInput(e.target.value)
  }

  return (
    <div>
      <p>You clicked {counter} times</p>
      <p className="btn" onClick={add}>
        Add
      </p>
      <p className="btn" onClick={subtract}>
        Subtract
      </p>
      <h3>TODOS</h3>
      
      <input value={input} onChange={handleInput}></input>

      <p className="btn" onClick={() => {
        addTodo(input)
      }}>Add Item</p>
      {todos.map(elem => {
        return <div>{elem}</div>
      })}
    </div>
  );
}
