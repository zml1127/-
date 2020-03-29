// import { getDetails } from '@/api/request'
import axios from 'axios'

export default {
    getData(id) {
        return (dispatch) => { //异步的方法是返回回调函数，参数是dispatch
            // axios(" http://localhost:4000/phoneList")
            //     .then(res => { dispatch({ type: 'GETDATA', list: res.data }) })
            axios.get("/hpb/education/getCourse?_t=1583423008108&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&educationCourseId="+id).then(res=>{
                console.log("action里的：",id,res)
                    // if(res.status === 200){ //res.data.data
                        dispatch({ type: 'GETDATA', 
                        data: res.data.data})
                    // }
                })

        }
    }


}