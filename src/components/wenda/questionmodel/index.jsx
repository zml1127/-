import React, { Component } from 'react'
import "./questionmodel.less"

export default class QuestionModel extends Component {
    render() {
        // console.log(this.props.item)
        let { item } = this.props
        return (
            <div className="Qmodel">
                <h4>{item.coverTitle}</h4>
                <div className="model_img">
                    <img src={item.recipe.image} alt=""/>
                    <div className="right">
                        <p>{item.recipe.title}</p>
                        <p>作者：{item.recipe.clientName}</p>
                    </div>
                </div>
                <div className="answer">
                   <span>{item.operation>0?item.operation+"个回答":"暂无回答"}</span>
                   <span>写答案</span>
                </div>
            </div>
        )
    }
    componentWillUnmount(){ //解决异步数据回来时，组件却卸载了
        // 重写组件的setState方法，直接返回空
        this.setState = (state,callback)=>{
            return; 
        };
    }

}
