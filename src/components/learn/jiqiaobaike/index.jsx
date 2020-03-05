import React, { Component } from 'react'
import { getJiQiao } from '@/api/request'
import { LeftOutlined, } from '@ant-design/icons';
import "./jiqiaobaike.less"

export default class Jiqiaobaike extends Component {
    constructor(props){
        super(props)
        this.state = {
            jiqiaoList:[],
        }
    } 
    //1: https://api.hongbeibang.com/education/getStartClass?_t=1583338054681&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&educationCourseId=10352
    // 2：https://api.hongbeibang.com/education/getStartClass?_t=1583338079519&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&educationCourseId=    10413
    componentDidMount(){
        getJiQiao().then(res=>{
            // console.log(666,res.data.data.courseGuide)
            this.setState({
                jiqiaoList:res.data.data.courseGuide
            })
        })
    }
    jumpJiaoQiaoCon(courseId){
        this.props.history.push("/learn/jiqiaobaike/jiqiaobaikecon",{courseId})
    }
    render() {
        let { jiqiaoList } = this.state
        return (
            <div className="jiqiaobaike">
                <div className="xiangzuo">
                    <LeftOutlined onClick={()=>{this.props.history.push("/")}} style={{fontSize:"0.27rem",margin:"0.095rem 0"}}/>
                </div>
                <ul>
                    {
                        jiqiaoList.map((v,i)=>{
                            return (
                                <li key={v.contentId} onClick={this.jumpJiaoQiaoCon.bind(this,v.courseId)}>
                                    <img src={v.image} alt={v.teacherName}/>
                                    <span>{v.title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
