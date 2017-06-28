const Router = require('koa-router')
const url = require('url')
const fsWatch = require('../modules/fs/watch.js')


let router = new Router()

router.all('/api/*', async(ctx, next) => {
    try {
        let pathname = url.parse(`..${ctx.url}`).pathname
        let resolvePath = require.resolve(pathname)
        if (fsWatch.isChange(resolvePath)) {
            console.log('reload module:' + resolvePath)
            delete require.cache[resolvePath]
        }
        await require(resolvePath)(ctx)
    } catch (error) {
        ctx.body = error.stack
    }
})
module.exports = router.routes()