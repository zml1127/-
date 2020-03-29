import React, { Component } from 'react'
import "./xiaowo.less"
import Hoc from '../hoc'
import { connect } from 'react-redux'
import actionCreator from './actionCreator'
import { Upload } from 'antd';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {
    SettingOutlined
  } from '@ant-design/icons';
@Hoc

class Xiaowo extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading:false
        }
    }
    getBase64=(img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
     };
    render() {
        const { imageUrl } = this.state;
        console.log(666,imageUrl )
        return (
            <div className="xiaowo">
                <div className="touxiang">
                    <div className="setting"><SettingOutlined /></div>
                    <div className="touxiang1 clearfix">
                        <div className="left">
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : "点击上传头像"}
                            </Upload>
                        </div>
                        <div className="right">
                            <p>你好：{sessionStorage.getItem("username")}</p>
                        </div>
                    </div>
                    <div className="guanzhu">关注|粉丝|帮贡</div>
                    <div className="zuopin">
                        <ul>
                            <li><p><img src="https://image.hongbeibang.com/FgyV7GBC4RPoagtZnK-npLaoB1N6?160X160&imageView2/1/w/80/h/80" alt=""/></p><p>作品</p></li>
                            <li><p><img src="https://image.hongbeibang.com/FgyV7GBC4RPoagtZnK-npLaoB1N6?160X160&imageView2/1/w/80/h/80" alt=""/></p><p>作品</p></li>
                            <li><p><img src="https://image.hongbeibang.com/FgyV7GBC4RPoagtZnK-npLaoB1N6?160X160&imageView2/1/w/80/h/80" alt=""/></p><p>作品</p></li>
                            <li><p><img src="https://image.hongbeibang.com/FgyV7GBC4RPoagtZnK-npLaoB1N6?160X160&imageView2/1/w/80/h/80" alt=""/></p><p>作品</p></li>
                        </ul>
                    </div>
                    <div className="hui"></div>
                    <ol>
                        <li>勋章库<img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/></li>
                        <li>精彩活动<img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/></li>
                        <li>每日签到<img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/></li>
                        <li>我的课程<img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/></li>
                        <li>浏览记录<img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/></li>
                        <li>达人申请<img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/></li>
                        <li>帮贡兑换<img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/></li>
                        <li>111</li>
                        <li>111</li>
                        <li>111</li>
                        <li>111</li>
                        <li>111</li>
                        <li>111</li>
                    </ol>

                </div>
            </div>
        )
    }
}

var mapState = state => state
export default connect(mapState,actionCreator)(Xiaowo)
