module.exports = {
    devServer: {
        proxy: { // proxyTable 설정
            '/api' : {
                target: 'http://localhost:3000/apt',
                changeOrigin: true,
                pathRewrite: {
                    "^/apt" : ''
                }
            }
        }
    }
}