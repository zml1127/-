import React, { Component } from 'react'
import "./learn.less"
import Swiper from 'swiper'
// import { Route, Switch, } from 'react-router-dom'
import { connect } from 'react-redux'
import actionCreator from './actionCreator'
import { Input, } from 'antd';
import { FileAddOutlined,SearchOutlined,AlertOutlined,CalendarOutlined,PlaySquareOutlined,ExperimentOutlined,WindowsOutlined } from '@ant-design/icons'
import { tuijian,yuanqi } from '../../api/request'
// import Sider from 'antd/lib/layout/Sider'

class Learn extends Component {
    constructor(props){
        super(props)
        this.state = {
            tuijianData:[],
            yuanqiData:[],
        }
    }
    componentDidMount(){
        tuijian().then(res=>{
            if(res.status === 200){
                this.setState({
                    tuijianData:res.data.data.data
                })
            }
        })
        yuanqi().then(res=>{
            if(res.status === 200){
                this.setState({
                    yuanqiData:res.data.data.category.splice(1,res.data.data.category.length-1)
                })
            }
        })
    }
    componentDidUpdate(){
        new Swiper('.swiper-container',{
            slidesPerView : 'auto', 
            resistanceRatio : 0,
            freeMode : true,
        })
    }
    jumpDeatil(item,type){
        this.props.history.push("/details",{item,type})
        // window.location.href="https://www.hongbeibang.com/lesson?contentId="+courseId
    }
    see(categoryId){
        // console.log(categoryId)
        this.props.history.push("/seeall",{categoryId})
    }
    topJump(path){
        this.props.history.push(path)
    }
    render() {
        // console.log(666,this.state.yuanqiData)
        // console.log("元气：",this.state.yuanqiData)
        return (
            <div className="learn">
                <header>
                    <FileAddOutlined style={{fontSize:"0.27rem"}}/>
                    <div className="input">
                        <Input 
                            style={{width:"2.5rem",height:'0.35rem'}}
                            placeholder="搜索食谱/石材，烘培/家常菜一应俱全"
                            prefix={<SearchOutlined className="site-form-item-icon" style={{fontSize:"0.20rem",paddingTop:"0.04rem",paddingRight:"0.1rem"}}/>}
                        />
                    </div>
                    <AlertOutlined style={{fontSize:"0.27rem"}}/>
                </header>
                <div className="learn_baike">
                    <ul>
                        <li onClick={this.topJump.bind(this,"/learn/jiqiaobaike")}>
                            <p><CalendarOutlined style={{fontSize:"0.457rem"}} /></p>
                            <p>技巧百科</p>
                        </li>
                        <li onClick={this.topJump.bind(this,"/learn/shipinxuetang")}>
                            <p><PlaySquareOutlined style={{fontSize:"0.457rem"}} /></p>
                            <p>视频学堂</p>
                        </li>
                        <li onClick={this.topJump.bind(this,"/learn/xinshoujiaocheng")}>
                            <p><ExperimentOutlined style={{fontSize:"0.457rem"}} /></p>
                            <p>新手教程</p>
                        </li>
                        <li onClick={this.topJump.bind(this,"/learn/shipufenlei")}>
                            <p><WindowsOutlined style={{fontSize:"0.457rem"}} /></p>
                            <p>食谱分类</p>
                        </li>
                    </ul>
                </div>
                {/* 推荐课程 */}
                <div className="learn_tuijian">
                    <h5>推荐课程</h5>
                    <div className="swiper-container">
                        <ul className="swiper-wrapper">
                            {
                                this.state.tuijianData.map((v,i)=>{
                                    return (
                                        // <li key={v.contentId}  className="swiper-slide" onClick={this.jumpDeatil.bind(this,v.courseId)}>
                                        <li key={v.contentId}  className="swiper-slide" onClick={this.jumpDeatil.bind(this,v,"推荐课程contentId")}>
                                            <p>
                                                <img src={v.coverImage} alt={v.clientName}/>
                                            </p>
                                            <p className="title1">
                                                {v.coverTitle}
                                            </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                {/* 元气早餐及往下 */}
                <div className="learn_yuanqi">
                       {
                           this.state.yuanqiData.map((item,index)=>{
                               return (
                                   <div key={item.categoryId} className="zaocan">
                                       <h4>
                                           <span>{item.title}</span>
                                           <span onClick={this.see.bind(this,item.categoryId)}>查看全部</span>
                                       </h4>
                                       <div className="swiper-container">
                                            <ol className="swiper-wrapper">
                                            {
                                                item.item.map((v,i)=>{
                                                    return (
                                                        // <li key={v.contentId}       className="swiper-slide" onClick={this.jumpDeatil.bind(this,v.educationCourseId)}> 
                                                        <li key={v.contentId}       className="swiper-slide" onClick={this.jumpDeatil.bind(this,v,"元气早餐及下方的contentId")}> 
                                                            <p> 
                                                                <img src={v.image} alt={v.clientName}/>
                                                                <span className="zaixue">
                                                                    {v.buyNum>1000?"1000+":v.buyNum}
                                                                    在学
                                                                </span>
                                                            </p>
                                                            <p className="title1">
                                                                {v.shareTitle}
                                                            </p>
                                                            
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ol>
                                       </div>
                                   </div>
                               )
                           })
                       } 
                </div>




            </div>
        )
    }
}

var mapState = state => state
export default connect(mapState,actionCreator)(Learn)
