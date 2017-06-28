const fs = require('fs')
const fnSet = new Set()
const path = require('path')

module.exports = {
    run(dir) {
        fs.watch(dir, {
            recursive: true
        }, (eventType, filename) => {
            console.log(`事件类型是: ${eventType}`)
            if (filename) {
                let resolvePath = path.resolve(dir, filename)
                console.log(`提供的文件名: ${resolvePath}`)
                fnSet.add(resolvePath)
            } else {
                console.log('未提供文件名')
            }
        })
    },
    isChange(filename) {
        if (fnSet.has(filename)) {
            fnSet.delete(filename)
            return true
        } else {
            return false
        }
    }
}