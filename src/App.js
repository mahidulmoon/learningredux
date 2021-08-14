import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { Increment,Decrement } from './actions';
function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count value: {counter}</h1>
      <button onClick={()=>dispatch(Increment())}>+</button>
      <button onClick={()=>dispatch(Decrement())}>-</button>
    </div>
  );
}

export default App;
