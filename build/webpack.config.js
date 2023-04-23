const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 本插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // 压缩优化css
const { VueLoaderPlugin } = require('vue-loader')

const { appHtml } = require('./paths')

let isProd = true

function getWabpackConfig() {
	isProd = process.env.NODE_ENV === 'production'

	const config = {
		mode: isProd ? 'production' : 'development',
		devtool: isProd ? 'source-map' : 'inline-source-map', // 正式环境也添加source-map，开发环境调试，使用inline-source-map
		// entry: './src/index.js',
		entry: {
			index: './src/main.js',
		},
		// entry: {
		// 	index: './src/index.js',
		// 	index2: './src/index2.js',
		// },
		output: {
			// filename: 'bundle.js',
			filename: '[name].[contenthash:8].js',
			path: path.resolve(__dirname, '../dist'),
			publicPath: '/', // 发送到 output.path 目录的每个文件，都将从 output.publicPath 位置引用
			clean: true, // 每次构建前清理 /dist 文件夹
		},
		optimization: {
			minimize: isProd, // 如果是ture会进行js、css压缩，会产生LICENSE.txt文件，把注释提取到单独的txt文件中
			minimizer: [
				// 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
				`...`, // js的压缩全靠这三个...，webpack认为，如果配置了minimizer，就表示开发者在自定义压缩插件，无论配置minimizer是true还是false，内部的JS压缩器都会被覆盖掉。所以我们这里要手动把它加回来，webpack内部使用的JS压缩器是terser-webpack-plugin.
				new CssMinimizerPlugin(),
			],
			splitChunks: {
				chunks: 'all', // initial同步，async异步，all同步或者异步
				cacheGroups: {
					// 其作用就相当于是一个分组条件，满足这个条件的输出为一个chunks。
					vendors: {
						// nodes_modules里的文件打到vendors chunk里
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						// eslint-disable-next-line max-len
						enforce: true, // 告诉 webpack 忽略 splitChunks.minSize、splitChunks.minChunks、splitChunks.maxAsyncRequests 和 splitChunks.maxInitialRequests 选项，并始终为此缓存组创建 chunk。
					},
					// srcVendors: {
					// 	test: /src/,
					// 	name: 'src-vendors',
					// 	minChunks: 2, // 至少两个地方引用时才单独打包
					// 	minSize: 0, // 默认20K，小于20K不进行拆包。所以我们设置为0，只要让包使用过2次以上就分包，不以大小来进行判断
					// 	// enforce: true,
					// },
				},
			},
			runtimeChunk: 'single', // 将包含chunks映射关系的list单独从入口文件里提取出来，方便浏览器缓存，否则会在入口文件js中每次都会发生变化，所有的入口文件一起共同生成一个runtimeChunk。
			// runtimeChunk: { name: "runtimechunk" },//同上，起个别名
			// runtimeChunk: {
			//   name: (entrypoint) => `runtimechunk~${entrypoint.name}`,//每个entry入口文件都生成一个runtimeChunk
			// },
		},
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // import引入文件的时候不用加后缀
			alias: { '@': path.resolve(__dirname, '../src') }, // 添加别名
		},
		devServer: {
			static: {
				directory: path.join(__dirname, '../dist'),
			},
			client: {
				progress: true,
			},
			compress: true, // 启用 gzip compression：
			historyApiFallback: true,
			hot: true,
			open: true, // 自动打开浏览器
			port: 'auto', // 自动使用一个可用端口
			proxy: {
				'/api': {
					target: 'http://cf-pc-dev.wti-xa.com:7777',
					changeOrigin: true, // 设置为true, 本地就会虚拟一个服务器接收你的请求并代你发送该请求,主要解决跨域问题
				},
			},
		},

		module: {
			rules: [
				{
					test: /\.css$/i,
					use: [
						isProd ? MiniCssExtractPlugin.loader : 'style-loader', // MiniCssExtractPlugin.loader和'style-loader'功能冲突，所以选一个就行
						// "style-loader",
						'css-loader',
						'postcss-loader',
					],
				},
				{
					test: /\.less$/i,
					use: [
						isProd ? MiniCssExtractPlugin.loader : 'style-loader', // MiniCssExtractPlugin.loader和'style-loader'功能冲突，所以选一个就行
						// 'style-loader',
						'css-loader',
						'postcss-loader',
						'less-loader',
					],
				},
				{
					test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
					type: 'asset/resource',
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: 'asset/resource',
				},
				{
					test: /\.(js|mjs|jsx|ts|tsx)$/,
					exclude: /(node_modules)/,
					// include: path.resolve(__dirname, '../src'),
					use: {
						loader: 'babel-loader',
						options: {
							cacheDirectory: !isProd, // 使用 cacheDirectory 选项，将 babel-loader 提速至少两倍。这会将转译的结果缓存到文件系统中。
							// presets: ['@babel/preset-env'],
							// plugins: ['@babel/plugin-transform-runtime'],
							// 上边两项配置移动到babel.config.js
						},
					},
				},
				{
					test: /\.vue$/,
					use: 'vue-loader',
				},
			],
		},

		plugins: [
			new HtmlWebpackPlugin({
				title: 'vue3-SPA-scaffold框架',
				template: appHtml,
				favicon: path.resolve(__dirname, '../public/favicon.ico'),
				// eslint-disable-next-line max-len
				// hash: true, //这里所有的引用都用一个hash值每次都会所有的都发生改变，所以用output的[contenthash]hash来替换这里。 append a unique webpack compilation hash to all included scripts and CSS files. This is useful for cache busting
				xhtml: true, // If true render the link tags as self-closing (XHTML compliant)
			}),
			isProd &&
				new BundleAnalyzerPlugin({
					// 打包分析工具
					analyzerMode: 'static', // generate a single HTML file with bundle report
					openAnalyzer: false, // Default: true. Automatically open report in default browser.
				}),
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
			}),
			new VueLoaderPlugin(),
			new webpack.DefinePlugin({
				// 解决浏览器报的warning
				__VUE_OPTIONS_API__: true, // 是否支持vue2的optionsAPI
				__VUE_PROD_DEVTOOLS__: false, // 开发阶段tree shaking
			}),
		].filter(Boolean), // .filter(Boolean)去掉假值
	}

	return config
}

module.exports = getWabpackConfig()
