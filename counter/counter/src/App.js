import logo from './logo.svg';
import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        value: props.data.initialValue,
      }
    }

    inc = () => {
      console.log(this.state.value);
      this.setState(state => ({
        value: state.value + 1
      }))
    }

    dec = () => {
      console.log(this.state.value);
      this.setState(state => ({
        value: state.value - 1
      }))
    }

    rnd = () => {
      console.log(this.state.value);
      this.setState(state => ({
        value: Math.round(Math.random() * 100),
      }))
    }

    reset = () => {
      console.log(this.state.value);
      this.setState(state => ({
        value: this.props.data.initialValue,
      }))
    }
    
    render() {
      // const {value} = this.state;
      return (
        <div class="app">
          <div class="counter">{this.state.value}</div>
          <div class="controls">
            <button onClick={this.inc}> + </button>
            <button onClick={this.dec}> - </button>
            <button onClick={this.rnd}>RND</button>
            <button onClick={this.reset}>RESET</button>
          </div>
        </div>
      )
    }
  }
  
  
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов
// }

export default App;
