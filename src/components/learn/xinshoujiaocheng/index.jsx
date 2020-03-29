import React, { Component } from 'react'

export default class XinShouJiaoCheng extends Component {
    componentWillUnmount(){ //解决异步数据回来时，组件却卸载了
        // 重写组件的setState方法，直接返回空
        this.setState = (state,callback)=>{
            return; 
        };
    }

    render() {
        // console.log(this.props)
        return (
            <div style={{fontSize:"0.5rem"}}>
                <button style={{fontSize:"0.3rem"}} onClick={()=>{this.props.history.go(-1)}}>点击回到上一页</button>
                <ul>
                    <li>这是篇新手教程</li>
                    <li>这是篇新手教程</li>
                    <li>这是篇新手教程</li>
                    <li>这是篇新手教程</li>
                    <li>这是篇新手教程</li>
                    <li>这是篇新手教程</li>
                    <li>这是篇新手教程</li>
                </ul>
            </div>
        )
    }
}
