import React, { Component } from 'react'
import ScrollY from '@/components/scrolly'
import "./dangao.less"
import { getScrollY } from '@/api/request'

export default class DanGao extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        getScrollY(10163).then(res=>{
            // console.log(res.data.data)
            this.setState({
                list:res.data.data
            })
        })
    }
    render() {
        // console.log(222,this.state.list)
        return (
            <div className="dangao">
                <ScrollY list={this.state.list} {...this.props}></ScrollY>
            </div>
        )
    }
}
