import React, { useEffect, useState } from 'react'

export default function Hooks() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("Angular");
    useEffect(() => {
        console.log("api calls is loaded");
    })
    console.log("function render is loaded");
    return (
        <>

            <h2 style={{ textDecoration: "underline", fontWeight: "bold" }}>Event trigger by functional Component using Hooks</h2>
            <h4>Count is <span style={{ color: "#ff0000" }}>{count}</span></h4>
            <button className='btn btn-success' onClick={() => setCount(count + 1)}>Increment</button>
            <h4>Welcome to {message}</h4>
            <button className='btn btn-success' onClick={() => setMessage("No this is the React Js class")}>Change Message</button>

        </>
    )
}
