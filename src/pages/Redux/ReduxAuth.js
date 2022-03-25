import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from './actions';

export default function ReduxAuth() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    return (
        <div className='redux-counter'>
            <h2>For Logged in users only</h2>
            <p>Log in to see a secret about me</p>
            <button type='button' onClick={() => dispatch(logIn())} className='btn btn-primary'>Login</button>
            <button type='button' onClick={() => dispatch(logOut())} className='btn btn-primary'>Logout</button>
            {
                auth ? (
                    <div>
                        <p>
                            I don't more than 50% of redux. But if you know 50% of it, you're like a Superman.
                        </p>
                    </div>
                ) : (<div>Please login</div>)
            }
        </div>
    )
}
