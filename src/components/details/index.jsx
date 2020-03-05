import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        // if(this.props.state.length !== 0){
        //     console.log(666,this.props.state)
        // }
        console.log(666,this.props.location.state)
        return (
            <div>
                推荐课程：couseId：{this.props.location.state.item.courseId}    <br />
                推荐课程：  https://www.hongbeibang.com/lesson?contentId={this.props.location.state.item.courseId}   <br />
                
               <hr />应该跳转到："window.location.href=     <br /><hr />
               元气早餐及往下educationCourseId：{this.props.location.state.item.educationCourseId} <br />
               元气早餐及往下：https://www.hongbeibang.com/lesson?contentId={this.props.location.state.item.educationCourseId}
            </div>
        )
    }
}
