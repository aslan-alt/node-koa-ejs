
exports.getPostData = function getPostData(ctx) {
    return new Promise((resolve, reject) => {
        let str = ''
        ctx.req.on('data', (chunk) => {
            str += chunk
        })
        ctx.req.on('end', () => {
            resolve(str)
        })
    })
}