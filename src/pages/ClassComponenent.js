import React, { Component } from 'react';
import { DashboardCardInfo } from '../App';

export default class ClassComponenent extends Component {
    constructor() {
        console.log("constructor is loaded")
        super()
        this.state = {
            count: 0,
            message: "Angular",
            data: [
                {
                    name: "United States",
                    percentage: "65%"
                },
                {
                    name: "UK",
                    percentage: "65%"
                },
                {
                    name: "Russia",
                    percentage: "65%"
                },
                {
                    name: "Spain",
                    percentage: "65%"
                },
                {
                    name: "India",
                    percentage: "65%"
                },
                {
                    name: "France",
                    percentage: "1.5%"
                }
            ]
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 3
        })
    }
    decrement() {
        this.setState({
            count: this.state.count - 3
        })
    }
    changeMsg() {
        this.setState({
            message: "No its React JS"
        })
    }
    componentDidMount() {
        console.log("component did mount is loaded")
    }
    render() {
        console.log("render is loaded")
        const countStyle = {
            color: "#ff0000"
        }
        return (
            <>
                <h2 style={{ textDecoration: "underline", fontWeight: "bold" }}>Events & map  by Class Component</h2>
                <h4>Count is <span style={countStyle}>{this.state.count}</span></h4>
                <button className='btn btn-success' onClick={() => this.increment()}>Increment</button>
                <button style={{ marginLeft: "20px" }} className='btn btn-success' onClick={() => this.decrement()}>Decrement</button>
                <h4>Welcome to {this.state.message}</h4>
                <button className='btn btn-success' onClick={() => this.changeMsg()}>Change Message</button>
                <ul>
                    {
                        this.state.data.map(e => <li key={e.name}>{e.name}</li>)
                    }
                </ul>
                <div>
                    <h3>Dashboard Information:</h3>
                    <DashboardCardInfo.Consumer>
                        {(content) => {
                            <>
                                <p>Total Messages is :<strong>{content.msgCount}</strong> </p>
                                {/* <p>Total Views is: <strong>{props.viewCount}</strong></p>
                                <p>Total Shares is: <strong>{props.shareCount}</strong></p>
                                <p>Total Users is: <strong>{props.userCount}</strong></p> */}
                            </>
                        }}
                    </DashboardCardInfo.Consumer>
                </div>
            </>
        )
    }
}
