import axios from './index' //引入经二次封装后的axios

export const getList = () => {  // https://cnodejs.org/api/v1/topics
    return axios.get("https://api.hongbeibang.com/recommend/getRandContent?_t=1583202819291&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjUwNTEzMywiaWF0IjoxNTgzMjAyNzMzfQ.86zTDxD0ltn4JkrldMlVuvsx4OwCt9LvsK5t_1AfQDE&type=3&pageSize=10")  //baseURL:"/abc"  不用写/abc了   
}

// 登陆页面获取地区
export const getArea = ()=>{
    return axios.get("https://api.hongbeibang.com/account/getAreaCode?_t=1583227876047&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjUxOTA1NCwiaWF0IjoxNTgzMjE2NjU0fQ.az9XOrNuxGUz7kJvO-cQD2aUkaWFOfIGZ5aFJ087LtM")
}
// 点击登录，post用户名和密码
export const login = (username,password)=>{
    return axios.post("/local/users/login",{username,password})
}
// 推荐课程
export const tuijian = ()=>{
    return axios.get("/hpb/recommend/getRandContent?_t=1583304278243&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&type=3&pageSize=10")
}
// 元气早餐开始往下的所有数据
export const yuanqi = ()=>{
    return axios.get("/hpb/education/getIndexByWeb?_t=1583304278244&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk")
}
// 学烘培页面 查看全部，获取响应页面的全部数据
export const SeeAllData = (categoryId)=>{
    return axios.get("/hpb/index/getIndexItem?_t=1583332758081&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&pageIndex=0&pageSize=10&categoryId="+categoryId)
}
// 学烘培页面，上方 技巧百科数据
export const getJiQiao = ()=>{
    return axios.get("/hpb/education/getNewbieGuide?type=5&_t=1583336618338&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk")
}
// 学烘培页面上方->技巧百科->每项点开
// export const getJiQiaoCon = ()=>{
//     return axios.get("/hpb/education/getStartClass?_t=1583338054681&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&educationCourseId=10352",
//         // {
//         //     params:{ 
//         //         _t:1583339330039,
//         //         csrfToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk",
//         //         educationCourseId:10413
//         //     }   
//         // }
//     )
// }
// // 学烘培页面上方->技巧百科->每项点开mock下数据 localhost:3001/data
export const getJiQiaoConn = ()=>{
    return axios.get("/mock/data")
}

// 视频学堂里所有数据
export const getShiPin = ()=>{
    return axios.get("/hpb/education/getIndexByWeb?_t=1583388486956&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk")
}
// details页面视频页数据
export const getDetails = (id)=>{
    return axios.get("/hpb/education/getCourse?_t=1583423008108&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&educationCourseId="+id)
}
// 学烘焙->视频学堂->蛋糕、面包吐司、面食等数据
export const getScrollY =(id)=>{
    return axios.get("/hpb/index/getIndexItem?_t=1583474708679&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&categoryId="+id)
}
// 搜索关键字
export const getSearchKeyWords = ()=>{
    return axios.get("/hpb/keyword/detail?_t=1583478382100&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk")
}
// 根据keyword找到对应的数据列表
export const getDataByKeyWords = (keyword)=>{
    return axios.get("/hpb/search/getMoreRecipe?_t=1583480984632&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&pageIndex=20&pageSize=10&keyword="+keyword+"=")
}
// 烘焙圈轮播图
export const getQuanSwip = ()=>{
    return axios.get("/hpb/feed/getCategory?_t=1583507083017&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk")
}
// 烘焙圈轮播图下方关键字
export const getQuanKey = ()=>{
    return axios.get("/hpb/community/randExpertNum?_t=1583507083192&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&num=5&communityId=")
}
// 烘焙圈->最新->动态
export const getZuiXinDongTai = ()=>{
    return axios.get("/hpb/v2/feed/getNew?_t=1583510576039&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&pageIndex=1&pageSize=50")
}

// 问答->精华问题
export const getEssence = ()=>{
    return axios.get("/hpb/question/getEssence?_t=1583570121420&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&pageIndex=0&pageSize=10")
}
// 问答->最新问题
export const getNew = ()=>{
    return axios.get("/hpb/question/getNew?_t=1583570075375&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&pageIndex=0&pageSize=10")
}
// 问答->最热问题
export const getHot = ()=>{
    return axios.get("/hpb/question/getHot?_t=1583570133019&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjU1NDM3MCwiaWF0IjoxNTgzMjUxOTcwfQ.OETc-w4A2NGY_CzLcsgVDK8Rps6U-om3NLzQm4t-2Kk&pageIndex=0&pageSize=10")
}
