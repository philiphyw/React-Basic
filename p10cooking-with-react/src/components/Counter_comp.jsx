import React, { Component } from 'react';
import { ThemeContext } from '../App';

export default class CounterComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.initialCount
        }
    }

render(){
    return <ThemeContext.Consumer>
        { contextStyle => ( // this 's a function in Consumer, the para contextStyle is the value in Provider
            <div>   
            <button style={contextStyle} className="btn" onClick={()=>this.changeCount(-1)}>-</button>
            <span>{this.state.count}</span>
            <button style={contextStyle} className="btn" onClick={()=>this.changeCount(1)}>+</button>
            </div>
        )}
    </ThemeContext.Consumer>
}

changeCount(amount) {
    this.setState(prevState => {
        return {count:prevState.count + amount}
    })
}

}

