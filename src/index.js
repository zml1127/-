import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router,Route, Redirect, Switch, } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Details from './components/details'
import { routes,learnRoutes } from './router'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
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
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
