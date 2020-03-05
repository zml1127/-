import React, { Component } from 'react'
import { Route,NavLink,Redirect } from 'react-router-dom'
import Swiper from 'swiper'
import { getShiPin } from '@/api/request'
import "./shipinxuetang.less"
import { SearchOutlined } from '@ant-design/icons';

export default class ShiPinXueTang extends Component {
    componentDidMount(){
        getShiPin().then(res=>{
            console.log(res.data.data.category)
        })
    }
    render() {
        return (
            <div className="shipinxuetang">
                <div className="shipin_top">
                    <ul>
                        <NavLink 
                        to="/learn/shipinxuetang/tuijian"><li>推荐</li></NavLink>
                        <li>蛋糕</li>
                        <li>面包土司</li>
                        <li>面食</li>
                        <li>甜品点心</li>
                        <li>中式点心</li>
                        <li>其他</li>
                    </ul>
                    <div className="shipin_top_big"><SearchOutlined style={{fontSize:"0.21rem"}}/></div>
                </div>
                {/* 轮播图下方 */}

            </div>
        )
    }
}
