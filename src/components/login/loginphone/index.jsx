import React, { Component } from 'react'
// import { getArea } from '@/api/request'
import { LeftOutlined } from '@ant-design/icons';
import "./loginphone.less"
import { connect } from 'react-redux'
import actionCreatorPhone from './actionCreator'

class LoginPhone extends Component {
    constructor(props){
        super(props)
        this.state = {
            area:[],
        }
    }
    componentDidMount(){
        this.props.getarea()
        // getArea().then(res=>{
        //     this.setState({
        //         area:res.data.data
        //     })
        // })
        // this.setState({
        //     area:this.props.loginphone.area
        // })
    }
    chooseCountry(code){
        this.props.history.push({pathname:"/login",params:{code}})
    }
    render() {
        return (
            <div className="loginphone">
                <div className="areaTop"><LeftOutlined onClick={()=>{this.props.history.push("/login")}}/><b>选择国家 / 地区</b></div>
                <div className="areaBottom">
                    {
                        this.props.loginphone.area.map((v,i)=>{
                            return (
                            <div key={i}>
                                <p>{v.firstLetter}</p>
                                <ul>
                                    {
                                        v.areaPhoneCode.map((item,index)=>{
                                            return (
                                                <li key={item.areaPhoneCodeId} onClick={this.chooseCountry.bind(this,item.areaCode)} >
                                                    <i>{item.areaNameCN} </i>
                                                    <b> {item.areaCode}</b>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

var mapState = state=>state
export default connect(mapState,actionCreatorPhone)(LoginPhone)