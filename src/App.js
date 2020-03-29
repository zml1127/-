import React from 'react';
import './App.less';
import { Route,NavLink,Redirect,Switch } from 'react-router-dom'
import Details from '@/components/details'
import { routes,learnRoutes } from './router'

function App() {
  return ( 
    <div className="App">
      <footer>
        <div><NavLink to='/learn' exact className={"App-link"} activeClassName={"App-active"}><p className="iconfont icon-zuofan" ></p>学烘培</NavLink></div>
        <div><NavLink to='/quan' className={"App-link"} activeClassName={"App-active"}><p className="iconfont icon-icon-test" ></p>烘培圈</NavLink></div>
        <div><NavLink to='/wenda' className={"App-link"} activeClassName={"App-active"}><p className="iconfont icon-wenda" ></p>问答</NavLink></div>
        <div><NavLink to='/xiaowo' className={"App-link"} activeClassName={"App-active"}><p className="iconfont icon-xiaowo" ></p>小窝</NavLink></div>
      </footer>
     
            <Switch>
                {
                    learnRoutes[0].children.map((v,i)=>{
                        return <Route path={v.path} component={v.component} key={i}></Route>
                    })
                }
                {
                    learnRoutes.map((v,i)=>{
                        return <Route path={v.path} component={v.component} key={i}></Route>
                    })
                }
                
                {
                    routes.map((v,i)=>{
                    return <Route path={v.path} component={v.component} key={i}></Route>
                    })
                }
                
                <Route path="/details" component={Details}></Route>
                <Redirect from="/" to="/learn" exact></Redirect>
                <Redirect to="/notfound"></Redirect>
            </Switch>
    </div>
  );
}

export default App;
