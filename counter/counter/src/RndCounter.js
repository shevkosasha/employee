import './App.css';
import useCounterHook from './CounterHook';

const RndCounter = (props) => {

    const counter = useCounterHook(props.defaultValue);

    return (
        <div className="component">
        <div className="counter">{counter.value}</div>
        <div className="controls">
            <button onClick={counter.rnd}>RND</button>
            <button onClick={counter.reset}>RESET</button>
        </div>
        </div>
    )
}

export default RndCounter;