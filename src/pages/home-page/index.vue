<template>
	<div class="home">
		<div class="home-title">home页-vue-router使用demo</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'HomePage',
}
</script>

<style lang="less" scoped>
.home {
	min-height: 540px;
	&-title {
		height: 60px;
		line-height: 60px;
		text-align: center;
		background-color: #eeeeee;
	}
}
</style>
