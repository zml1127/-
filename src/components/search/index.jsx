import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import actionCreator from './actionCreator'
import { LeftOutlined, } from '@ant-design/icons';
import "./search.less"

class Search extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            // keyWords:[]
        }
    }
    componentDidMount(){
        this.props.getKeywords()
        // this.setState({
        //     keyWords:
        // })
    }
    searchh(keyword){
        // this.props.getKeyList(keyword)
        this.props.history.push("/keylist",{keyword})
        // getDataByKeyWords(keyword)
        // .then(res=>{console.log("请求的",res.data.data.search)})
    }
    render() {
        // console.log(123,this.props.search.keyWords)
        // console.log(465,this.props.search.keyList)
        return (
            <div className="search">
                <div className="search_top">
                    <p>
                        <LeftOutlined onClick={()=>{this.props.history.push("/learn")}} style={{fontSize:"0.27rem",margin:"0.095rem 0"}}/>
                    </p>
                    <p>
                        <input placeholder="搜索食谱/事菜,烘焙/家常菜一应俱全"/>
                    </p>
                    <p className="sear">搜索</p>
                </div>
                <ul>
                {
                    this.props.search.keyWords.map((v,i)=>{
                        return (
                            <li key={i} onClick={this.searchh.bind(this,v.keyword)}>
                                {v.keyword}
                            </li>
                        )
                    })
                }
                </ul>

            </div>
        )
    }
}

var mapState = state=>state
export default connect(mapState,actionCreator)(Search)
