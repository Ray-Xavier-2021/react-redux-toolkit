import React from 'react'
import { 
  increment,
  decrement, 
  reset,
  incrementByAmount
} from '../counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0)

    const addValue = Number(amount) || 0

    const resetAll = () => {
      setAmount(0)
      dispatch(reset())
    }
  return (
    <section>
        <p>{ count }</p>
        <div className='buttons'>
          <button
              onClick={() => dispatch(decrement())}
          >-</button>
          <button
            onClick={resetAll}
          >Reset</button>
          <button
              onClick={() => dispatch(increment())}
          >+</button>
        </div>
        <input 
          value={amount}
          type="text"
          onChange={(e) => setAmount(e.target.value)}
        />
        <div>
          <button
            className='valueBtn'
            onClick={() => dispatch(incrementByAmount(addValue))}
          >
            Increment
          </button>
        </div>
    </section>
  )
}

export default Counter