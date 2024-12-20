
import { decrement, increment, incrementByAmount } from './store/slices/counter';
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks';

function App() {
  
  const { counter } = useAppSelector( ( state ) => state.counter );
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          type='button'
          aria-label="Increment value"
          onClick={ () => dispatch( increment() ) }
        >
          Increment
        </button>
        <span>{ counter }</span>
        <button
          type='button'
          aria-label="Decrement value"
          onClick={ () => dispatch( decrement() ) }
        >
          Decrement
        </button>
        <button
          type='button'
          aria-label="Increment by 2"
          onClick={ () => dispatch( incrementByAmount( 2 ) ) }
        >
          Increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
