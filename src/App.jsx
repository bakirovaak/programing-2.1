import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';

function App() {
  const count = useSelector ((state) => state.counter.value)
  const title = useSelector((state) => state.counter.title)
  const items = useSelector((state) => state.counter.items)

  const dispatch = useDispatch()

return (
    <div style={{ padding: '40px', fontFamily: 'system-ui' }}>
      <h1>{title}</h1>
      
      <h2>Счётчик: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>-1</button>

      <h3>Фрукты из Redux (не JSON):</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
 
export default App