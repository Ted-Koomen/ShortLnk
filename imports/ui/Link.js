import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class Link extends Component {
    
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        browserHistory.push('/')
    }
    
    
    render() {
        return (
        <div>
           <h1> Your Links </h1>
           <button onClick={this.handleClick}>Logout</button> 
        </div>
        )
    }
}

export default Link