import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,reset } from '../redux/counterSlice'
import './counter.css';

function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (

        <div>
            <div>

                <div className='count'>
                    <h3 id='counter-value'>{count}</h3>
                    <button id='increase-button'
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </button>

                    <button id='decrease-button'
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        -
                    </button>

                    <button id='reset-button'
                        aria-label="Decrement value"
                        onClick={() => dispatch(reset())}
                    >
                        reset
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Counter;