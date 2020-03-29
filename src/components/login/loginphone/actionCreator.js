import { getArea } from '@/api/request'
// import reducer from './reducer'

export default {
    getarea() {
        return (dispatch) => { //异步的方法是返回回调函数，参数是dispatch
            getArea()
            .then(res => { 
                // console.log("res",res.data.data)
                if(res.status === 200){
                    dispatch({ type: 'LOGIN', area: res.data.data }) 
                }
            })
        }
    }


}