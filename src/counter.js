import React, { Component } from 'react'
import {connect} from 'react-redux'

class Counter extends Component {

    increment = () => {
        this.props.dispatch({type : "INCREMENT"})
    }
    decrement = () => {
        this.props.dispatch({type : "DECREMENT"})
    }

    render() {
        return (
            <div className="counter mt-5">
                <h2>counter</h2>
                <div>
                    <button className="btn btn-success m-4" onClick={this.increment}>+</button>
                    <span>{this.props.count}</span>
                    <button className="btn btn-danger m-4" onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }
}


const mapPropStore = (state) => ({
    count: state.count
})

export default connect(mapPropStore)(Counter)