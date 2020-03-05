import React from 'react';
import './App.less';
import { NavLink } from 'react-router-dom'
// import { routes } from './router'
// import 'antd/es/date-picker/style';
// import 'antd/dist/antd.css';
// import Details from './components/details'

function App() {
  return (
    <div className="App">
      <footer>
        <div><NavLink to='/learn' exact className={"App-link"} activeClassName={"App-active"}><p className="iconfont icon-zuofan" ></p>学烘培</NavLink></div>
        <div><NavLink to='/quan' className={"App-link"} activeClassName={"App-active"}><p className="iconfont icon-icon-test" ></p>烘培圈</NavLink></div>
        <div><NavLink to='/wenda' className={"App-link"} activeClassName={"App-active"}><p className="iconfont icon-wenda" ></p>问答</NavLink></div>
        <div><NavLink to='/xiaowo' className={"App-link"} activeClassName={"App-active"}><p className="iconfont icon-xiaowo" ></p>小窝</NavLink></div>
        {
          // sessionStorage.getItem("token")?<div><NavLink to='/xiaowo' className={"App-link"} activeClassName={"App-active"}><p className="iconfont icon-xiaowo" ></p>小窝</NavLink></div>:<div><NavLink to='/login' className={"App-link"} activeClassName={"App-active"}><p className="iconfont icon-xiaowo" ></p>小窝</NavLink></div>
        }
      </footer>
     
    {/* <Switch>
      {
        routes.map((v,i)=>{
          return <Route path={v.path} component={v.component} key={i}></Route>
        })
      }
      
      <Redirect from="/" to="/learn" exact></Redirect>
      <Redirect to="/notfound"></Redirect>
    </Switch> */}
    
     {/* 路由： react-router-dom
        跨域：axios
        配置代理：http-proxy-middleware
        封装axios（src/api/）
        仓库：redux   react-redux
        异步操作，异步中间件：redux-thunk //没用上
        ui库：antd 
        按需加载：react-app-rewired customize-cra
        按需加载代码和样式的：babel-plugin-import
        自定义主题：less安装：less less-loader
        @指向src文件夹
        配置装饰器：@babel/plugin-proposal-decorators
    路由懒加载：react-loadable
    */}
    </div>
  );
}

export default App;
