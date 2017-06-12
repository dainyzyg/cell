function log(ctx) {
    console.log(ctx.method, ctx.header.host + ctx.url)
}

module.exports = function () {
    return async function (ctx, next) {
        log(ctx);
        let x = await next()
        // console.log(x)
        // console.log(__dirname)
    }
}