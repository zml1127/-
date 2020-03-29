import React, { PureComponent } from 'react'
import Swiper from 'swiper'
import { getQuanSwip,getQuanKey,getZuiXinDongTai } from '@/api/request'
import "./zuixin.less"

export default class ZuiXin extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            swip:[],
            quanKey:[],
            zuixinDongTai:[],
            // visible:false
            visible:true,
            img:""
        }
    }
    componentDidMount(){
        getQuanSwip().then(res=>{
            this.setState({
                swip:res.data.data.category[0].item
            })
        })
        getQuanKey().then(res=>{
            this.setState({
                quanKey:res.data.data
            })
        })
        getZuiXinDongTai().then(res=>{
            this.setState({
                zuixinDongTai:res.data.data.content
            })
        })
    }
    componentDidUpdate(){
        new Swiper('.swiper-container',{
            slidesPerView : 'auto', 
            resistanceRatio : 0,
            freeMode : true,
        })
    }
    randomColor=()=>{
        let r = Math.floor(Math.random()*256)
        let g = Math.floor(Math.random()*256)
        let b = Math.floor(Math.random()*256)
        return 'rgba('+r+','+g+','+b+',0.3)'
    }
    confirm(item){
        console.log(item,this.conf)
        this.setState({
            img:item
        })
        this.conf.style.display = "block"
    }
    render() {
        console.log(this.state.zuixinDongTai)
        return (
            <div className="zuixin">
                <div className="swiper-container">
                    <ul className="swiper-wrapper clearfix">
                        {
                            this.state.swip.map((v,i)=>{
                                return (
                                    <li className="swiper-slide" key={i}><img src={v.image} alt=""/></li>
                                )
                            })
                        }
                    </ul>
                    {/* <div className="swiper-scrollbar"></div> */}
                </div>
                <div className="quan_key">
                    <ul>
                        <li style={{background:this.randomColor()}}>#午餐#</li>
                        <li style={{background:this.randomColor()}}>#晚餐#</li>
                        <li style={{background:this.randomColor()}}>#下午茶#</li>
                        <li style={{background:this.randomColor()}}>#夜宵#</li>
                        {
                            this.state.quanKey.map((v,i)=>{
                                return (
                                <li key={i} style={{background:this.randomColor()}}>{v.communityName}</li>
                                )
                            })
                        }
                    </ul>
                    {/* https://api.hongbeibang.com/community/randExpertNum?_t=1583507083192&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&num=5&communityId= */}
                </div>
                <div className="quan_dongtai">
                    {
                            this.state.zuixinDongTai.map((v,i)=>{
                                return (
                                    <div key={i} className="dongtai1">
                                        <div className="name">
                                            <div><img src={v.clientImage} alt=""/></div>
                                            <div className="namee">
                                                <span>{v.clientName}</span>
                                                <p>几分钟前 奥利奥盒子蛋糕</p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <span>{v.communityName}</span>
                                            {v.introduce}
                                        </div>
                                        <div className="pic">
                                            {
                                                v.image.map((item,index)=>{
                                                    return (
                                                        <div key={index}>
                                                            {
                                                                v.image.length>=4?
                                                                <img src={item} alt="" key={index} style={{width:"1.1rem",height:"1.1rem"}} onClick={this.confirm.bind(this,item)}/>:
                                                                (v.image.length>=2?<img src={item} alt="" key={index} style={{width:"1.695rem",height:"1.7rem"}} onClick={this.confirm.bind(this,item)}/>:
                                                                <img src={item} alt="" key={index} style={{width:"2.19rem",height:"1.7rem"}} onClick={this.confirm.bind(this,item)}/>)
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                            
                                        </div>
                                        <div className="pinglun">
                                            <span>点赞：{v.likeNum}</span>
                                            <span>打赏：{v.rewardNum}</span>
                                            <span>评论</span>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className="confirm" ref={conf=>this.conf=conf} onClick={()=>{
                            this.conf.style.display = "none"
                        }}>
                            <div className="magic"></div>
                            <img src={this.state.img} alt=""/>
                        </div>
                </div>
            </div> 
        )
    }
    componentWillUnmount(){ //解决异步数据回来时，组件却卸载了
        // 重写组件的setState方法，直接返回空
        this.setState = (state,callback)=>{
            return; 
        }
    }
}
