const fs = require('fs')
const path = require('path')
const util = require('util')

module.exports = function () {
    return async function (ctx, next) {
        try {
            const fpath = path.resolve(process.cwd(), './dist/index.html')
            const fstat = await util.promisify(fs.stat)(fpath);
            if (fstat.isFile()) {
                ctx.type = path.extname(fpath);
                ctx.body = fs.createReadStream(fpath);
            } else {
                ctx.body = 'dist/index.html文件不存在！！！'
            }
        } catch (error) {
            ctx.body = error.stack
        }
    }
}