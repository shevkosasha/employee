import './App.css';
import useCounterHook from './CounterHook';

const Counter = (props) => {

    const counter = useCounterHook(props.defaultValue);

    return (
      <div className="component">
        <div className="counter">{counter.value}</div>
        <div className="controls">
          <button onClick={counter.inc}>INC</button>
          <button onClick={counter.dec}>DEC</button>
          <button onClick={counter.rnd}>RND</button>
          <button onClick={counter.reset}>RESET</button>
        </div>
      </div>
    )
}

export default Counter ;
