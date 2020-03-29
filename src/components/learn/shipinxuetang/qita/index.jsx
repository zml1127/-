import React, { Component } from 'react'
import ScrollY from '@/components/scrolly'
import { getScrollY } from '@/api/request'

export default class QiTa extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        getScrollY(10180).then(res=>{
            this.setState({
                list:res.data.data
            })
        })
    }
    render() {
        return (
            <div style={{marginTop: "0.6rem"}}>
                <ScrollY list={this.state.list} {...this.props}></ScrollY>
            </div>
        )
    }
}
