const Koa = require('koa')
const koaRouter = require('koa-router')
const router = new koaRouter()
const app = new Koa()
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')//获取post请求数据
const static = require('koa-static')


// const common = require('./module/common.js')//原生js 获取表单方法

//配置中间件
// app.use(views('views',{map:{html:'ejs'}}))//这样配置也可以 但要用html后缀
app.use(views('views', {
    extension: 'ejs',
}))


app.use(async (ctx, next) => {
    ctx.state = {
        userName: '小可爱'
    }
    await next()
})
router.get('/', async (ctx, next) => {
    console.log('我是一个路由中间件')
    await ctx.render('index', {
        title: '绑定数据',
    })

})
router.get('/news', async (ctx) => {
    let content = "<h2>这是外部定义的一个模块</h2>"
    await ctx.render('news', {
        list: ['美食', '购物', '逛街', '酒店'],
        content,
        num: 22
    })
})

//原生post
router.get('/login', async (ctx) => {
    await ctx.render('login')
})
// router.post('/doLogin',async(ctx)=>{
//     let data = await common.getPostData(ctx)
//     ctx.body = data
// })
router.use(bodyParser())
router.post('/doLogin', async (ctx) => {
    ctx.body = ctx.request.body
})

// app.use(static('./static'))//配置静态中间件,并且指定静态文件路径
app.use(static(__dirname + '/static'))
app.use(router.routes())
    .use(router.allowedMethods())


app.listen(8081)























// const Koa = require('koa')
// const router = require('koa-router')()//实例化
// const app = new Koa()

// //匹配任何路由，匹配路由之前要做的操作，如果写这个路由被匹配到了就不会继续向下匹配


// router.get('/', async (ctx, next) => {
//     console.log('我是一个路由中间件')
//     ctx.body = '新闻页面'
// })
// app.use(async (ctx,next)=>{
//     console.log('先执行use绑定的中间件,不管我写在上面还是下面')
//     next()
//     if(ctx.status === 404){
//         ctx.body = '这是一个404页面'
//     }else{
//         console.log(ctx.url)
//     }

// })

// app.use(router.routes())//启动路由
//     .use(router.allowedMethods())//可以配置也可以不配置，建议配置，这是官方推荐的用法，我们可以看到router.allowedMethods()用在了路由匹配router.routers()之后，所以在当所有路由中间件最后调用，此时根据ctx.status 设置response响应头

// app.listen(8081)
