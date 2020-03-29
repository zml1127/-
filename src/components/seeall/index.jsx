import React, { Component } from 'react'
import { SeeAllData } from '@/api/request'
import "./seeall.less"

export default class SeeAll extends Component {
    constructor(props){
        super(props)
        this.state = {
            allList:[],
        }
    }
    componentDidMount(){
        SeeAllData(this.props.location.state.categoryId).then(res=>{
            this.setState({
                allList:res.data.data
            })
        })
    }
    jumpDeatil(item,type){
        this.props.history.push("/details",{item,type})
        // window.location.href="https://www.hongbeibang.com/lesson?contentId="+courseId
    }
    render() {
        // console.log(this.props.location.state)
        // console.log("list::",this.state.allList)
        let { allList } = this.state 
        return (
            <div className="seeall">
                {/* {this.props.location.state.categoryId} */}
                <ul className="clearfix">
                    {
                        allList.map((v,i)=>{
                            return (
                                <li key={i}  onClick={this.jumpDeatil.bind(this,v,"元气早餐及下方的contentId")}>
                                    <p>
                                        <img src={v.image} alt={v.clientName}/>
                                        <span className="zaixue">
                                            {v.buyNum>1000?"1000+":v.buyNum}
                                            人参加
                                        </span>
                                    </p>
                                    <p className="title">
                                        {v.shareTitle}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
