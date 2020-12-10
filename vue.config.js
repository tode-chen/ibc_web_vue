module.exports = {
    publicPath: '/',
    devServer: {
        host: 'localhost',
        https: false,
        proxy: {
            '/api/public/api/v1': {
                target: 'http://ibc.com/api/public/api/v1', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api/public/api/v1': ''
                }
            }
        },
        overlay: {
            warnings: false,
            errors: false
        }
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/css/global.scss";`
            },
        },
    },

    lintOnSave: false
}