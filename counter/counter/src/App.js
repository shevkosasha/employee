import { useState } from 'react';
import './App.css';

function App(props) {

  const [value, setValue] = useState(props.data.initialValue)

  const inc = () => setValue(value => value + 1)

  const dec = () => setValue(value => value - 1)

  const rnd = () => setValue(() => Math.round(Math.random() * 100))

  const reset = () => setValue(() => props.data.initialValue)

  return (
    <div class="app">
      <div class="counter">{value}</div>
      <div class="controls">
        <button onClick={inc}> + </button>
        <button onClick={dec}> - </button>
        <button onClick={rnd}>RND</button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  )
}

  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов
// }

export default App;
