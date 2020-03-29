import React from 'react'
import Loadable from 'react-loadable'
const loadingComponent = ()=>{return (<div style={{
    paddingTop:"50%",paddingLeft:"50%",transform:"translateX:-50% translateY:-50%",width:"100%",height:"100%"
}}>
    loading.... <br />
    <img style={{width:"1rem",height:"1rem"}} alt="" src={"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583331757612&di=b750585d594cc3be06345b1c4a6d624b&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_biaoqing%2F25662262.jpeg"}/>
</div>)}

var Learn = Loadable({ //异步加载组件
    loader:()=>import("@/components/learn"),
    loading:loadingComponent,    
})
var Quan = Loadable({ //异步加载组件
    loader:()=>import("@/components/quan"),
    loading:loadingComponent,  
})
var Wenda = Loadable({ //异步加载组件
    loader:()=>import("@/components/wenda"),
    loading:loadingComponent,  
})
var Xiaowo = Loadable({ //异步加载组件
    loader:()=>import("@/components/xiaowo"),
    loading:loadingComponent,  
})
var Login = Loadable({ //异步加载组件
    loader:()=>import("@/components/login"),
    loading:loadingComponent,  
})
var LoginPhone = Loadable({ //异步加载组件
    loader:()=>import("@/components/login/loginphone"),
    loading:loadingComponent,  
})
var NotFound = Loadable({ //异步加载组件
    loader:()=>import("@/components/notfound"),
    loading:loadingComponent,  
})
var SeeAll = Loadable({ //异步加载组件
    loader:()=>import("@/components/seeall"),
    loading:loadingComponent,  
})

// 学烘培头部四个页面
var JiQiaoBaiKe = Loadable({ //异步加载组件
    loader:()=>import("@/components/learn/jiqiaobaike"),
    loading:loadingComponent,  
})
var ShiPinXueTang = Loadable({ //异步加载组件
    loader:()=>import("@/components/learn/shipinxuetang"),
    loading:loadingComponent,  
})
var XinShouJiaoCheng = Loadable({ //异步加载组件
    loader:()=>import("@/components/learn/xinshoujiaocheng"),
    loading:loadingComponent,  
})
var ShiPuFenLei = Loadable({ //异步加载组件
    loader:()=>import("@/components/learn/shipufenlei"),
    loading:loadingComponent,  
})

// 技巧百科里的每个点进去的细节页面
var jiqiaobaikeCon = Loadable({ //异步加载组件
    loader:()=>import("@/components/learn/jiqiaobaike/jiqiaobaike_con"),
    loading:loadingComponent,  
})
var Search = Loadable({ //异步加载组件
    loader:()=>import("@/components/search"),
    loading:loadingComponent,  
})
var KeyList= Loadable({ //异步加载组件
    loader:()=>import("@/components/search/keylist"),
    loading:loadingComponent,  
})

export const routes = [
    {
        path:'/learn',
        component:Learn
    },
    {
        path:'/quan',
        component:Quan
    },
    {
        path:'/wenda',
        component:Wenda
    },
    {
        path:'/xiaowo',
        component:Xiaowo
    },
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/loginphone',
        component:LoginPhone
    },
    {
        path:'/seeall',
        component:SeeAll
    },
    {
        path:'/search',
        component:Search
    },
    {
        path:'/keylist',
        component:KeyList
    },
    {
        path:'/notfound',
        component:NotFound
    }
]

export const learnRoutes = [
    {
        path:'/learn/jiqiaobaike',
        component:JiQiaoBaiKe,
        children:[
            {
                path:"/learn/jiqiaobaike/jiqiaobaikecon",
                component:jiqiaobaikeCon
            }
        ]
    },
    {
        path:'/learn/shipinxuetang',
        component:ShiPinXueTang
    },
    {
        path:'/learn/xinshoujiaocheng',
        component:XinShouJiaoCheng
    },
    {
        path:'/learn/shipufenlei',
        component:ShiPuFenLei
    },
]

// 视视频分类里的各路由组件
var TuiJian = Loadable({ 
    loader:()=>import("@/components/learn/shipinxuetang/tuijian"),
    loading:loadingComponent,  
})
var DanGao = Loadable({ 
    loader:()=>import("@/components/learn/shipinxuetang/dangao"),
    loading:loadingComponent,  
})
var MianBaoTuSi = Loadable({ 
    loader:()=>import("@/components/learn/shipinxuetang/mianbaotusi"),
    loading:loadingComponent,  
})
var MianShi = Loadable({ 
    loader:()=>import("@/components/learn/shipinxuetang/mianshi"),
    loading:loadingComponent,  
})
var TianPinDianXin = Loadable({ 
    loader:()=>import("@/components/learn/shipinxuetang/tianpindianxin"),
    loading:loadingComponent,  
})
var ZhongShiDianXin = Loadable({ 
    loader:()=>import("@/components/learn/shipinxuetang/zhongshidianxin"),
    loading:loadingComponent,  
})
var QiTa = Loadable({ 
    loader:()=>import("@/components/learn/shipinxuetang/qita"),
    loading:loadingComponent,  
})

export const shipinRoutes = [
    {
        path:"/learn/shipinxuetang/tuijian",
        component:TuiJian
    },
    {
        path:"/learn/shipinxuetang/dangao",
        component:DanGao
    },
    {
        path:"/learn/shipinxuetang/mianbaotusi",
        component:MianBaoTuSi
    },
    {
        path:"/learn/shipinxuetang/mianshi",
        component:MianShi
    },
    {
        path:"/learn/shipinxuetang/tianpindianxin",
        component:TianPinDianXin
    },
    {
        path:"/learn/shipinxuetang/zhongshidianxin",
        component:ZhongShiDianXin
    },
    {
        path:"/learn/shipinxuetang/qita",
        component:QiTa
    }
]

var GuanZhu = Loadable({
    loader:()=>import("@/components/quan/guanzhu"),
    loading:loadingComponent,  
})
var ZuiXin = Loadable({
    loader:()=>import("@/components/quan/zuixin"),
    loading:loadingComponent,  
})
var DaRen = Loadable({
    loader:()=>import("@/components/quan/daren"),
    loading:loadingComponent,  
})
// 烘焙圈 上方三个组件
export const quanRoutes = [
    {
        path:"/quan/guanzhu",
        component:GuanZhu
    },
    {
        path:"/quan/zuixin",
        component:ZuiXin
    },
    {
        path:"/quan/daren",
        component:DaRen
    },
]

var JingHua = Loadable({
    loader:()=>import("@/components/wenda/jinghua"),
    loading:loadingComponent,  
})
var ZuiXin = Loadable({
    loader:()=>import("@/components/wenda/zuixin"),
    loading:loadingComponent,  
})
var ZuiRe = Loadable({
    loader:()=>import("@/components/wenda/zuire"),
    loading:loadingComponent,  
})
// 问答 上方三个组件
export const wendaRoutes = [
    {
        path:"/wenda/jinghua",
        component:JingHua
    },
    {
        path:"/wenda/zuixin",
        component:ZuiXin
    },
    {
        path:"/wenda/zuire",
        component:ZuiRe
    },
]

