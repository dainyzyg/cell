const Koa = require('koa')
const Router = require('koa-router')
const loggerAsync = require('./middleware/logger-async.js')

const app = new Koa()

app.use(loggerAsync())

// app.use(async(ctx) => {
//     delete require.cache[require.resolve('./cache.js')]
//     let str = require('./cache.js')
//     ctx.body = str
//     return ctx.body
// })
let router = new Router()

// 子路由1
router.all('/api/*', async(ctx) => {
    let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
    console.log(ctx.query)
    ctx.body = html
})
app.use(router.routes())
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')