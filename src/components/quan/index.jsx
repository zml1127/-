import React, { Component } from 'react'
import { NavLink,Route,Redirect,Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import actionCreator from './actionCreator'
import { quanRoutes } from "@/router"
import { PlusOutlined,AlertOutlined } from '@ant-design/icons';
import "./quan.less"

class Quan extends Component {
    
    render() {
        return (
            <div className="quan">
                <div className="quan_top">
                    <p><PlusOutlined style={{fontSize:"0.27rem",margin:"0.095rem 0"}}/></p>
                    <ul>
                        <li><NavLink activeClassName={"quan-active"} to="/quan/guanzhu">关注</NavLink></li>
                        <li><NavLink activeClassName={"quan-active"} to="/quan/zuixin">最新</NavLink></li>
                        <li><NavLink activeClassName={"quan-active"} to="/quan/daren">达人</NavLink></li>
                    </ul>
                    <p><AlertOutlined  style={{fontSize:"0.27rem",margin:"0.095rem 0"}}/></p>
                </div>
                <Switch>
                    {
                        quanRoutes.map((v,i)=>{
                            return (
                                <Route path={v.path} component={v.component} key={i}></Route>
                            )
                        })
                    }
                    <Redirect from="/quan" to="/quan/zuixin"></Redirect>
                </Switch>
            </div>
        )
    }
}

var mapState = state => state
export default connect(mapState,actionCreator)(Quan)

