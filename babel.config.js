module.exports = {
	presets: [
		// 仅配置了预设（智能预设，可以编译 ES6 的语法）
		'@babel/preset-env',
	],
	plugins: ['@babel/plugin-transform-runtime'],
}
