import React, { Component } from 'react'

export default class About extends Component {

    render() {
        console.log(this)
        return (
            <div>
                About
                {Math.floor(Math.random() * 10)}
                <button onClick={()=> {
                    this.setState({})
                }}>X</button>
            </div>
        )
    }
}
