const Koa = require('koa')
const router = require('./middleware/router.js')
const toIndex = require('./middleware/toIndex.js')
const staticCache = require('koa-static-cache')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const mongoConnect = require('./modules/mongo/connect.js')
const assert = require('assert')
const fsWatch = require('./modules/fs/watch.js')
const webpack = require("webpack")
const webpackConfig = require('./webpack.config.js')
const opn = require('opn')
let isFirstStart = true
const compiler = webpack(webpackConfig)

const watching = compiler.watch({
  /* watchOptions */
}, (err, stats) => {
  console.log(stats.toString({
    // 增加资源信息
    assets: true,
    // 增加缓存了的（但没构建）模块的信息
    cached: false,
    // Show cached assets (setting this to `false` only shows emitted files)
    cachedAssets: false,
    // 增加子级的信息
    children: false,
    modules: false,
    chunks: false, // 使构建过程更静默无输出
    colors: true // 在控制台展示颜色
  }))
  if (isFirstStart) {
    opn('http://localhost:3000', {
      app: 'google chrome'
    })
  }
  isFirstStart = false
})

const app = new Koa()
mongoConnect(app)
app.use(logger())

//let files = {}
app.use(staticCache({
  dir: 'public',
  dynamic: true,
  gzip: true
}))
app.use(staticCache({
  dir: 'dist',
  prefix: '/dist/',
  dynamic: true,
  gzip: true,
  maxAge: 365 * 24 * 60 * 60
}))

app.use(router)
app.use(bodyParser())
app.use(toIndex())

app.listen(3000, () => {
  console.log('listened')
})
fsWatch.run('./api/')

process.on('uncaughtException', function (err) {
  console.log('uncaughtException:')
  console.log(err)
})

console.log('[demo] start-quick is starting at port 3000')