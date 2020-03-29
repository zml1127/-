import React, { Component } from 'react'
import { Switch,NavLink,Route,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import actionCreator from './actionCreator'
import { AlertOutlined } from '@ant-design/icons';
import "./wenda.less"
import { wendaRoutes } from '@/router'

class Wenda extends Component {
    // 精华问答 https://api.hongbeibang.com/question/getEssence?_t=1583570121420&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&pageIndex=0&pageSize=10
    // 最新问题 https://api.hongbeibang.com/question/getNew?_t=1583570075375&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&pageIndex=0&pageSize=10
    // 最热问题 https://api.hongbeibang.com/question/getHot?_t=1583570133019&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&pageIndex=0&pageSize=10
    render() {
        return (
            <div className="wenda">
                <div className="wenda_top">
                    <button>提问</button>
                    <input type="text" defaultValue="搜索问题" onClick={()=>{this.props.history.push("/search")}}/>
                    <AlertOutlined style={{fontSize:"0.27rem",margin:"0.095rem 0",paddingRight:"0.1rem"}}/>
                </div>
                <div className="wenti">
                    <ul>
                        <li><NavLink activeClassName={"wenda_active"}to="/wenda/jinghua">精华问题</NavLink></li>
                        <li><NavLink activeClassName={"wenda_active"}to="/wenda/zuixin">最新问题</NavLink></li>
                        <li><NavLink activeClassName={"wenda_active"}to="/wenda/zuire">最热问题</NavLink></li>
                    </ul>
                    <Switch>
                        {
                            wendaRoutes.map((v,i)=>{
                                return (
                                    <Route path={v.path} component={v.component} key={i}></Route>
                                )
                            })
                        }
                        <Redirect from="/wenda" to="/wenda/zuixin" exact></Redirect>
                    </Switch>
                </div>

            </div>
        )
    }
}

var mapState = state => state
export default connect(mapState,actionCreator)(Wenda)

