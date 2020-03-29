import React, { Component } from 'react'
import { getNew } from '@/api/request'
import QuestionModel from '../questionmodel'


export default class ZuiXin extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        getNew().then(res=>{
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
