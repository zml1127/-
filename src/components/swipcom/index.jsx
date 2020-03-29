import React, { Component } from 'react'
import "./swipcom.less"
import Swiper from 'swiper'

export default class SwipCom extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:this.props.list
        }
    }
    componentDidMount(){
        new Swiper('.swiper-container2',{
            slidesPerView : 'auto', 
            resistanceRatio : 0,
            freeMode : true,
        })
    }
    componentDidUpdate(){
       
    }
    jumpDeatil(item,type){ //点击某一项跳转到细节页面
        this.props.history.push("/details",{item,type})
    }
    see(categoryId){ //查看全部
        // console.log(categoryId)
        this.props.history.push("/seeall",{categoryId})
    }
    render() {
        // console.log(this.props.list,[this.state.list])
        // console.log(555,this.props)
        return (
            <div className="swipcom">
                {
                    [this.state.list].map((v,i)=>{
                        return (
                            <div key={v.categoryId}>
                                <h4>
                                    <span>{v.title}</span> 
                                    <span onClick={this.see.bind(this,v.categoryId)}>查看全部</span>
                                </h4>
                                <div className="swiper-container2">
                                    <ul className="swiper-wrapper">
                                        {
                                            v.item.map((vv,ii)=>{
                                                return (
                                                    <li key={vv.contentId}  className="swiper-slide" onClick={this.jumpDeatil.bind(this,vv,"推荐课程contentId")}>
                                                        <p>
                                                            <img src={vv.image} alt={vv.clientName}/>
                                                            <span className="zaixue">
                                                                    {vv.buyNum>1000?"1000+":vv.buyNum}
                                                                    在学
                                                                </span> 
                                                        </p>
                                                        <p className="title1">
                                                            {vv.shareTitle}
                                                        </p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
