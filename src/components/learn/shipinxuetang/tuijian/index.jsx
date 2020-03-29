import React, { Component } from 'react'
import Swiper from 'swiper'
import { getShiPin } from '@/api/request'
import "./tuijian.less"
import SwipCom from '@/components/swipcom'

export default class TuiJian extends Component {
    constructor(props){
        super(props)
        this.state = {
            lunbo:[],
            tuijian_bottom:[]
        }
    }
    componentDidMount(){
        getShiPin().then(res=>{
            this.setState({
                lunbo:res.data.data.category[0].item,
                tuijian_bottom:res.data.data.category.splice(1)
            })
        })
    }
    componentDidUpdate(){
        new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay:true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              dynamicBullets: true,
              clickable :true,
            },
        }) 
    }
    render() {
        return (
            <div className="tuijian">
                {/* 推荐 */}
                <div className="first_swiper">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.lunbo.map((v,i)=>{
                                    return (
                                        <div className="swiper-slide" key={v.categoryItemId}>
                                            <img src={v.image} alt=""/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* <!-- 如果需要分页器 --> */}
                        <div className="swiper-pagination"></div>
                        {/* <!-- 如果需要导航按钮 --> */}
                        {/* <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div> */}
                    </div>
                </div>
                <div>
                    {
                        this.state.tuijian_bottom.map((v,i)=>{
                            return (
                                <SwipCom list={v} key={i} {...this.props}></SwipCom>
                            )
                        })
                    }
                    
                </div>



            </div>
        )
    }
}
