const dayjs = require('dayjs')

// let x = dayjs('').unix();
// console.log(x)

const date1 = dayjs('2020-06-09 19:50')
const date2 = dayjs()
let x = date1.diff(date2, 's')
let day = parseInt(x / 86400)
let remainder = x % 86400//出去天多余的秒
let hours = parseInt(remainder / 3600)//计算小时
remainder = remainder % 3600//小时剩下的秒
let Minutes = parseInt(remainder / 60)//计算分钟
let seconds = (remainder % 60)
console.log(`距今:${Math.abs(day)}天 ${Math.abs(hours)}小时 ${Math.abs(Minutes)}分钟 ${Math.abs(seconds)}秒`)











//实例化
//     app = new Koa(),
//     ejs = require('ejs'),
//     views = require('koa-views')
// //配置中间件 --第三方中间件
// //app.use('views),{map:{html:'ejs}}  这样配置也可以
// app.use(views('./views',{
//     extension:'ejs'
// }))

// router.get('/',async (ctx)=>{
//     await ctx.render('index')
// })
// router.get('/news',async ()=>{
//     ctx.body = '这是一个新闻'
// })

// app.use(router.routes())
// app.use(router.all)



//匹配任何路由，匹配路由之前要做的操作，如果写这个路由被匹配到了就不会继续向下匹配
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

// app.listen(3000)
