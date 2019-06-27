const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
    devtool: "source-map",
    entry: ['@babel/polyfill', './src/client/index.js'],
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'bundle.js',
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            '/': 'http://127.0.0.1:8080'
        }
    },
    plugins: [
        new CleanWebpackPlugin({outputDirectory}),
        new HtmlWebpackPlugin({
            inject: false,
            template: './public/index.html',
            favicon: './public/favicon.ico',
            // 压缩html
            minify: {
                // 移除注释
                removeComments: true,
                // 不要留下任何空格
                collapseWhitespace: true,
                // 当值匹配默认值时删除属性
                removeRedundantAttributes: true,
                // 使用短的doctype替代doctype
                useShortDoctype: true,
                // 移除空属性
                removeEmptyAttributes: true,
                // 从style和link标签中删除type="text/css"
                removeStyleLinkTypeAttributes: true,
                // 保留单例元素的末尾斜杠。
                keepClosingSlash: true,
                // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
                minifyJS: true,
                // 缩小CSS样式元素和样式属性
                minifyCSS: true,
                // 在各种属性中缩小url
                minifyURLs: true

            }
        }),
    ],
    stats: {
        children: false
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true
            }),
        ]
    }
};