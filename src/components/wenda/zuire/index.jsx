import React, { Component } from 'react'
import { getHot } from '@/api/request'
import QuestionModel from '../questionmodel'

export default class ZuiRe extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        getHot().then(res=>{
            this.setState({
                list:res.data.data.content.data
            })
        })
    }
    render() {
        return (
            <div style={{paddingTop:"1rem"}}>
                {
                    this.state.list.map((v,i)=>{
                        return (
                            <QuestionModel item={v} key={i}></QuestionModel>
                        )
                    })
                }
            </div>
        )
    }
}
