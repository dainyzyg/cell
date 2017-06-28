module.exports = async(ctx) => {
    console.log('www')
    // ctx.query
    // ctx.request.body
    //console.log(ctx.db.runMongo.toString())
    // ctx.body = await ctx.db.runMongo('./test')
    ctx.body = await ctx.db.collection('documents').findOne({
        a: 3
    })
    //ctx.body = '12312'
}