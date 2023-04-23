<template>
	<div class="home-header">
		<el-menu
			:default-active="activeIndex"
			class="el-menu-demo"
			mode="horizontal"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b"
			@select="handleSelect"
		>
			<el-sub-menu index="1">
				<template #title>Home</template>
				<el-menu-item index="1-1">SubHome1</el-menu-item>
				<el-sub-menu index="1-2">
					<template v-slot:title>SubHome2</template>
					<el-menu-item index="1-2-1">SubHome2-1</el-menu-item>
					<el-menu-item index="1-2-2">SubHome2-2</el-menu-item>
				</el-sub-menu>
			</el-sub-menu>
			<el-menu-item index="2">购物车</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
import router from '@/router/index'

export default {
	name: 'AppHeader',
	data() {
		return {
			activeIndex: '1-1',
		}
	},
	methods: {
		// 修改选中状态，完成路由跳转
		handleSelect(key, keyPath) {
			// eslint-disable-next-line no-console
			console.log(key, keyPath)
			this.activeIndex = key
			switch (key) {
				case '1-1': {
					router.push({ path: '/home/subHome1' })
					break
				}
				case '1-2-1': {
					router.push({ path: '/home/subHome2-1' })
					break
				}
				case '1-2-2': {
					router.push({ path: '/home/subHome2-2' })
					break
				}
				case '2': {
					router.push({ path: '/shopping-cart' })
					break
				}
				default:
					break
			}
		},
	},
}
</script>

<style lang="less" scoped>
.el-menu-demo {
	padding-left: 50px;
}
</style>
