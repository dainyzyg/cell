class changeChunkIDs {
    apply(compiler) {
        compiler.plugin("compilation", (compilation) => {
            compilation.plugin("before-chunk-ids", (chunks) => {
                chunks.forEach((chunk) => {
                    chunk.id = chunk.name
                })
            })
        })
    }
}

module.exports = changeChunkIDs