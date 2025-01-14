import './App.css';
import useCustomHook from './CustomHook';

const Counter = (props) => {

    const counter = useCustomHook(props.counter);

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
