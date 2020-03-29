import { getSearchKeyWords,getDataByKeyWords } from '@/api/request'

export default {
    getKeywords() {
        return (dispatch) => { //异步的方法是返回回调函数，参数是dispatch
            getSearchKeyWords().then(res=>{
                // console.log("actionCreator里的search数据",res.data.data)
                dispatch({ 
                    type: 'GETSEARCHKEYWORDS', 
                    list: res.data.data.popularSearch
                })
            })
        }
    },
    getKeyList(keyword){
        return (dispatch) => { //异步的方法是返回回调函数，参数是dispatch
            getDataByKeyWords(keyword).then(res=>{
                // console.log("actionCreator里的search数据",res.data.data)
                dispatch({ 
                    type: 'GETKEYLIST', 
                    list: res.data.data.search
                })
            })
        }
    },

}