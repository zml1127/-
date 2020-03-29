import React, { Component } from 'react'
import { Route,NavLink,Redirect,Switch } from 'react-router-dom'
import "./shipinxuetang.less"
import { SearchOutlined } from '@ant-design/icons';
import { shipinRoutes } from '@/router'

export default class ShiPinXueTang extends Component {
    componentWillUnmount(){ //解决异步数据回来时，组件却卸载了
        // 重写组件的setState方法，直接返回空
        this.setState = (state,callback)=>{
            return; 
        };
    }
    render() {
        return (
            <div className="shipinxuetang">
                <div className="shipin_top">
                    <ul>
                        <li><NavLink to="/learn/shipinxuetang/tuijian" activeClassName={"shipin_active2"} exact>推荐</NavLink></li>
                        <li><NavLink to="/learn/shipinxuetang/dangao" activeClassName={"shipin_active2"}>蛋糕</NavLink></li>
                        <li><NavLink to="/learn/shipinxuetang/mianbaotusi" activeClassName={"shipin_active2"}>面包吐司</NavLink></li>
                        <li><NavLink to="/learn/shipinxuetang/mianshi" activeClassName={"shipin_active2"}>面食</NavLink></li>
                        <li><NavLink to="/learn/shipinxuetang/tianpindianxin" activeClassName={"shipin_active2"}>甜品点心</NavLink></li>
                        <li><NavLink to="/learn/shipinxuetang/zhongshidianxin" activeClassName={"shipin_active2"}>中式点心</NavLink></li>
                        <li className="lastt"><NavLink to="/learn/shipinxuetang/qita" activeClassName={"shipin_active2"}>其他</NavLink></li>
                    </ul>
                    <div className="shipin_top_big"><SearchOutlined style={{fontSize:"0.21rem"}}/></div>
                </div>
                {/* 轮播图下方 */}
            <Switch>
                {
                    shipinRoutes.map((v,i)=>{
                        return (
                            <Route path={v.path} component={v.component} key={i}></Route>
                        )
                    })
                }
                <Redirect from="/learn/shipinxuetang" to="/learn/shipinxuetang/tuijian" exact></Redirect>
            </Switch>

            </div>
        )
    }
}
