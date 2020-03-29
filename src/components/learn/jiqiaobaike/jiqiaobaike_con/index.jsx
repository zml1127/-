import React, { Component } from 'react'
import { getJiQiaoConn } from '@/api/request'
import "./jiqiaobaike_con.less"
import { LeftOutlined, } from '@ant-design/icons';

export default class jiqiaobaikeCon extends Component {
    constructor(props){
        super(props)
        this.state = {
            jiqiaoConData:[],
            introduce:""
        }
    }
    componentDidMount(){
        // localStorage.setItem("csrfToken","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk")
        // localStorage.setItem("pgv_pvi",386491583202068791)
        // https://api.hongbeibang.com/education/getStartClass?_t=1583338054681&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&educationCourseId=+this.props.location.state.courseId
        // getJiQiaoCon(this.props.location.state.courseId)
        // .then(res=>{
        //     console.log(222222222222,res)
        // })
        getJiQiaoConn()
        .then(res=>{
            this.setState({
                jiqiaoConData:res.data,
                introduces:res.data.introduces[0].introduce
            })
        })
        // var videoo = this.videoo
        // this.videoo.ontimeupdate = function(a){
        //     var vTime = videoo.currentTime  //当前播放的进度时间
        //     // console.log(222,vTime)
        // }
        // this.videoo.onloadedmetadata = function () {
        // var vLength = videoo.duration; //视频时间长度
        // }
        // // videoo.pause();//暂停播放
        // // videoo.muted=false;//打开声音
    }
    render() {
        // console.log("this.props:",this.props.location.state)
        let { jiqiaoConData,introduces } = this.state
        // console.log(1111,introduces)
        return (
            <div className="jiqiao_con">
                {/* 技巧百科下细节——点进去具体的内容  <br />
                用户未登录就获取不到数据 */}
                <div className="top_prev">
                    <LeftOutlined onClick={()=>{this.props.history.push("/learn/jiqiaobaike")}} style={{fontSize:"0.27rem",margin:"0.095rem 0"}}/>
                </div>
                <div className="top_video">
                    <video poster={jiqiaoConData.image}  controls autoPlay={true}  src={jiqiaoConData.hDVideoUrl} ref={videoo=>{this.videoo=videoo}}>
                    {/* <source src={"https://alivideo.hongbeibang.com/daxue-2018-8-7-11-17-47-61?auth_key=1583468624-4716790191076495240-0-3751928d062165c70de0070b8640725e"} type="video/mp4" data-reactid=".axdtajvt4w.1.0.2.0.0"></source> */}
                    </video>
                    <img src={"https://image.hongbeibang.com/FiItVU3dzeRj6-wuSk2oVpTW8xoh?imageView2/1/w/640/h/640"} alt={jiqiaoConData.title}/>
                </div> 
                <div className="video_title">{jiqiaoConData.title}</div>
                <div className="jiqiao_intro">
                    {
                        <div dangerouslySetInnerHTML={{__html:introduces }}></div>
                    }
                </div>
            </div>
        )
    }
}
