const MongoClient = require('mongodb').MongoClient
const mconf = require('../../config.json').mongodb
const fs = require('fs')
const path = require('path')

let url = `mongodb://${mconf.username}:${mconf.password}@${mconf.url}?authMechanism=DEFAULT`;
const runMongo = (db) => {
    return async(fileName, args, callback) => {
        let mongoScript = fs.readFileSync(path.resolve(process.cwd(), `./mongo/${fileName}.mongo`))
        let result = await db.command({
            eval: mongoScript.toString(),
            args: [args],
            nolock: true
        })
        return result
    }
}
module.exports = async(app) => {
    app.context.db = await MongoClient.connect(url)
    //console.log(app.context.db.runMongo)
    app.context.db.runMongo = runMongo(app.context.db)
}