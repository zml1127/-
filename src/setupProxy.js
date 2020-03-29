const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) { 
    // https://api.hongbeibang.com/recommend/getRandContent?_t=1583202819291&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3MjUwNTEzMywiaWF0IjoxNTgzMjAyNzMzfQ.86zTDxD0ltn4JkrldMlVuvsx4OwCt9LvsK5t_1AfQDE&type=3&pageSize=10
    // app.use('/abc', createProxyMiddleware({
    //     target: "https://api.hongbeibang.com",
    //     changeOrigin: true,
    //     pathRewrite: { "^/abc": "/" }
    // }))
    app.use('/local', 
    createProxyMiddleware({
        target: "http://localhost:4000",
        changeOrigin: true,
        pathRewrite: { 
            "^/local": ""
        } 
    }))
    app.use('/hpb', 
    createProxyMiddleware({
        target: "https://api.hongbeibang.com",
        changeOrigin: true,
        pathRewrite: { 
            "^/hpb": ""
        } 
    }))
    app.use('/mock', 
    createProxyMiddleware({
        target: "http://localhost:3001",
        changeOrigin: true,
        pathRewrite: { 
            "^/mock": ""
        } 
    }))
}



