import React, { Component } from 'react'
import { getList } from '../../api/request'

export default class NotFound extends Component {
    componentDidMount(){
       getList().then(res=>{console.log(res)})
    }
    render() {
        return (
            <div>
                页面出错啦~~这是404页面
            </div>
        )
    }
}
