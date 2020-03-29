import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import actionCreator from './actionCreator.js'
import "./details.less"

class Detail extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            data:[],
            introduces:[]
        }
    }
    componentDidMount(){
        let id = 10571
        // if(this.props.location.state.type==="推荐课程contentId"){
        if(this.props.location.state.item.courseId !== undefined){
            id = this.props.location.state.item.courseId
        }else{
            id = this.props.location.state.item.educationCourseId
        }
        // console.log("iddddddd:",id,this.props.location.state.item.courseId)
        this.props.getData(id)
        
    }
    componentDidUpdate(){
        this.setState({
            data:this.props.details.newState.data,
            introduces:this.props.details.newState.introduces
        })
    }
    render() {
        return (
            <div className="details">
                <div className="top_video">
                    <video src={this.state.data.playURL} poster={this.state.data.image} controls autoPlay={true} playsInline="playsinline"  object-fit={"fill"}></video>
                    <h2>{this.state.data.shareTitle}</h2>
                    <div className="vid_zaixue">
                        <img src="https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&imageView2/1/w/54/h/54" alt=""/>
                        <span>{this.state.data.buyNum>1000?"1000+":this.state.data.buyNum}</span>人在学
                        <button>试看课程</button>
                    </div>
                </div>
                <div className="vid_type">
                    <ul className="clearfix">
                        <li>永久回看</li>
                        <li>报名即学</li>
                        <li>自营课程</li>
                        <li>高效学习体验</li>
                        <li>分步骤学</li>
                        <li>唯一品类</li>
                        <li>推按下载</li>
                        <li>工具材料参考</li>
                    </ul>
                </div>
                <div className="vid_work">
                    <b>学员作业</b><span>查看更多</span>
                </div>
                
                <div className="vid_intro">
                    {
                      this.state.introduces.map((v,i)=>{
                           return (
                            <div key={i}>
                                <h4>{v.title}</h4>
                                {<div dangerouslySetInnerHTML={{__html:v.introduce}}></div>}
                            </div>
                           )
                       })
                    }
                </div>
                <div dangerouslySetInnerHTML={{__html:this.state.data.teacherIntroduce}}></div>

                {/* 推荐课程：couseId：{this.props.location.state.item.courseId}    <br />
                推荐课程：  https://www.hongbeibang.com/lesson?contentId={this.props.location.state.item.courseId}   <br />
                
               <hr />应该跳转到："window.location.href=     <br /><hr />
               元气早餐及往下educationCourseId：{this.props.location.state.item.educationCourseId} <br />
               元气早餐及往下：https://www.hongbeibang.com/lesson?contentId={this.props.location.state.item.educationCourseId} */}
            </div>
        )
    }
}

var mapState = state=>state
export default connect(mapState,actionCreator)(Detail)
