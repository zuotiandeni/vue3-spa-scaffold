// 方式1
module.exports = {
	plugins: [
		[
			'postcss-preset-env', // 用了该组件不再需要用autoprefixer组件了
			{
				// 其他选项
			},
		],
	],
}

//   方式2
//   module.exports = {
//     plugins: {
//       'postcss-flexbugs-fixes': {},
//       'postcss-preset-env': {},
//     },
//   }
