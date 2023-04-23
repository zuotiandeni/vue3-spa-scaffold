<template>
	<div class="app-root">
		<AppHeader />
		<div class="app-root-container">
			<router-view></router-view>
		</div>
		<AppFooter />
	</div>
</template>

<script>
import AppHeader from './components/app-header/index.vue'
import AppFooter from './components/app-footer/index.vue'

export default {
	name: 'AppRoot',
	components: {
		AppHeader,
		AppFooter,
	},
}
</script>

<style lang="less">
.app-root {
	height: 100%;
	overflow: scroll;
	&-container {
		min-height: calc(100vh - 120px);
	}
}
</style>
