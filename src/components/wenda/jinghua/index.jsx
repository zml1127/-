import React, { Component } from 'react'
import { getEssence } from '@/api/request' 
import "./jinghua.less"

export default class JingHua extends Component {
    constructor(props){
        super(props)
        this.state = {
            essence:[],
        }
    }
    componentDidMount(){
        getEssence().then(res=>{
            this.setState({
                essence:res.data.data.content.data
            })
        })
    }
    render() {
        // console.log(this.state.essence)
        return (
            <div className="jinghua" style={{paddingTop:"1rem"}}>
                {
                    this.state.essence.map((v,i)=>{
                        return (
                            <div key={i} className="jinghua_item">
                                <div className="touxiang">
                                    <img src={v.clientImage} alt=""/>
                                    {v.clientName}
                                </div>
                                <div className="title">
                                    <h4>{v.title}</h4>
                                    <p>{v.coverSummary}</p>
                                    <i>{v.rewardNum}个赞</i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    componentWillUnmount(){ //解决异步数据回来时，组件却卸载了
        // 重写组件的setState方法，直接返回空
        this.setState = (state,callback)=>{
            return; 
        };
    }
}
