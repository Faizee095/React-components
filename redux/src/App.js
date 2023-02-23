import './App.css';
import { useSelector , useDispatch } from 'react-redux';
import { decNum  , incNum} from './action';

function App() {
  const countReducer = useSelector((state)=>state.countReducer)
  const dispatch = useDispatch();

  return (
    <div className="app">
     <h1>Counter using Redux</h1>
     <div className='counter'>
      <button className='btn' onClick={()=> dispatch(incNum())}>+</button>
      <span>Counter - {countReducer}</span>
      <button className='btn' onClick={()=> dispatch(decNum())}>-</button>
     </div>
    </div>
  );
}

export default App;
