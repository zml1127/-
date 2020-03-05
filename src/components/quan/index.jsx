import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreator from './actionCreator'

class Quan extends Component {
    render() {
        return (
            <div>
                烘焙圈
            </div>
        )
    }
}

var mapState = state => state
export default connect(mapState,actionCreator)(Quan)

