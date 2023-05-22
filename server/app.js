const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

//引入自己写的module
const registerRouter=require("./routes/registerRouter/registerRouter")
const loginRouter=require("./routes/loginRouter/loginRouter")

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


var cors = require('koa2-cors');
app.use(cors({
  origin: '*', // 前端地址
  credentials: false, // 是否携带 cookie
  allowMethods: ["GET", "POST", "DELETE", "PUT"], // 设置所允许的HTTP请求方法
  exposeHeaders: ["Authorization"], // 让浏览器能访问到其他的响应头
  allowHeaders: ["Content-Type", "Authorization", "Accept"] // 设置服务器支持的所有头信息字段
}))




//登录鉴权
app.use(async (ctx, next) => {
  
  if (
    ctx.request.url.includes("/login") ||
    ctx.request.url.includes("/register")
  ) {
    await next();
    return;
  } else {
    //如果是登录页面不验证直接放行
    
    const token = ctx.req.headers.authorization?.split(" ")[1]; //取出请求头中的token

    if (token) {
      //如果token存在验证是否过期
      let payload = JWT.verify(token);

      if (payload) {
        //过期payload==false,不过期payload为用户数据对象
        payload.exp = undefined;
        payload.iat = undefined;
        payload = JSON.parse(JSON.stringify(payload)); //删除jwt自动加上的exp和iat字段

        const newtoken = JWT.generate({ ...payload }, "5h");
        ctx.res.setHeader("Authorization", newtoken);
        
await next()

      } else { //如果过期返回401
          
        ctx.res.statusCode=401

      }

      
    } 
  }
});

// 注册自己引入的routes
app.use(registerRouter.routes(),registerRouter.allowedMethods())
app.use(loginRouter.routes(),loginRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
