import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from './actions';

export default function ReduxCounter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className='redux-counter'>
            <h1>Redux Counter</h1>
            <h4>Count is {counter}</h4>
            <button type='button' onClick={() => dispatch(increment())} className='btn btn-primary'>Increment</button>
            <button type='button' onClick={() => dispatch(decrement())} className='btn btn-primary'>Decrement</button>
            <button type='button' onClick={() => dispatch(reset())} className='btn btn-primary'>Reset</button>
        </div>
    )
}
