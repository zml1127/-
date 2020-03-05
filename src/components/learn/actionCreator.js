import { tuijian, yuanqi } from '../../api/request'

export default {
    TUIJIAN() {
        return (dispatch)=>{
            tuijian()
            .then(res=>{
                dispatch({
                    type:'TUIJIAN',
                    tuijianData:res.data.data.data
                })
            })
        }
    },
    YUANQI(){
        return (dispatch)=>{
            yuanqi()
            .then(res=>{
                dispatch({
                    type:'YUANQI',
                    yuanqiData:res.data.data.category
                })
            })
        }
    }


}