import React, { Component } from 'react'
import "./scrolly.less"

export default class ScrollY extends Component {
    jumpDeatil(item,type){
        this.props.history.push("/details",{item,type})
    }
    render() {
        return (
            <div className="scrolly">
               <ul>
                {
                        this.props.list.map((v,i)=>{
                            return (
                                <li key={i}  onClick={this.jumpDeatil.bind(this,v,"蛋糕页的categoryId：10163")}>
                                    <p>
                                        <img src={v.verticalImages} alt={v.clientName}/>
                                        <span className="zaixue">
                                            {v.buyNum>1000?"1000+":v.buyNum}
                                            人参加
                                        </span>
                                    </p>
                                    <p className="title">
                                        {v.shareTitle}
                                    </p>
                                </li>
                            )
                        })
                    }
               </ul>
            </div>
        )
    }
}
