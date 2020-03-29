import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../actionCreator'
import "./keylist.less"

class KeyList extends Component {
    componentDidMount(){
        let {keyword} = this.props.location.state
        this.props.getKeyList(keyword)
    }
    render() {
        console.log(789798789,this.props.search.recipe)
        return (
            <div className="keylist">
                具体列表
                <ul>
                    {
                        this.props.search.recipe.map((v,i)=>{
                            return (
                                <li key={i}>
                                    <div className="key_left">
                                        <img src={v.coverImage} alt=""/>
                                    </div>
                                    <div className="key_right">
                                        <h5>{v.title}</h5>
                                        <p>{v.shareNum>1000?"1000+":v.collectNum}学过</p>
                                        <p>{v.likeNum}喜欢</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(state=>state,actionCreator)(KeyList)
