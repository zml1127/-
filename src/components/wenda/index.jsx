import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreator from './actionCreator'

class Wenda extends Component {
    render() {
        return (
            <div>
                问答
            </div>
        )
    }
}

var mapState = state => state
export default connect(mapState,actionCreator)(Wenda)

