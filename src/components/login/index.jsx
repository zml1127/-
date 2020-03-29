import React, { Component } from 'react'
import "./login.less"
import { connect } from 'react-redux'
import { login } from '../../api/request'
import { message } from 'antd';

// import 'antd/dist/antd.css';
import {
    PhoneOutlined,
    KeyOutlined
} from '@ant-design/icons';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            code:'+86',
        }
    }
    componentDidMount(){
        if(this.props.location.params){
            this.setState({
                code:this.props.location.params.code
            })
        }
    }
    submit=()=>{ // 86111:111    86222:222 zml:123
        var username = (this.state.code+this.phoneNum.value).substr(1)
        var password = this.passwordNum.value
        login(username,password).then(res=>{
            if(res.status === -1){ //用户名或密码错误，登录失败
                message.config({
                    top:175,
                    maxCount: 3,
                });
                message.error('用户名或密码错误');
                
            }
            if(res.data.status === 0 && res.data.data.login){
                sessionStorage.setItem("username",username)
                sessionStorage.setItem("token",res.data.data.token)
                this.props.history.push("/")
            }
        })
    }
    render() {
        return (
            <div className="login">
                <p>
                    <span onClick={()=>{this.props.history.push("/")}}>取消</span>
                    <b>登陆</b>
                </p>
                <div>
                    <div>
                        <PhoneOutlined />
                        <div className="quhao" onClick={()=>{this.props.history.push("/loginphone")}}>{this.state.code}
                            <img alt="" src="https://image.hongbeibang.com/FvouzJLfDehM1NfR7u-51rBxkxxu?20X20&imageView2/1/w/20/h/20"/>
                        </div>
                        <div className="shoujihao">
                            <input type="text" placeholder="请输入用户名" ref={phoneNum=>this.phoneNum=phoneNum}/>
                        </div>
                    </div>
                    <div>
                        <KeyOutlined />
                        <div>
                            <input type="password" placeholder="请输入密码" ref={passwordNum=>{this.passwordNum=passwordNum}}/>
                        </div>
                    </div>
                    <div className="forgetPassword">忘记密码？</div>
                    <div className="denglu">
                        <button onClick={this.submit}>登陆</button>
                    </div>
                </div>

            </div>
        )
    }
}

var mapState = state=>state
export default connect(mapState)(Login)
