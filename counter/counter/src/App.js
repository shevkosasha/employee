import './App.css';
import Counter from './Counter';
import RndCounter from './RndCounter';

const App = () => {

  return (
      <>
          <Counter defaultValue={0}/>
          <RndCounter defaultValue={0}/>
      </>
  )
}

export default App ;
