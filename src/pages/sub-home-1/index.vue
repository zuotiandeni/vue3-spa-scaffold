<template>
	<div class="sub-home-1">
		<div title="点击我发送get请求" style="cursor: pointer" @click="requestTest">sub-home-1</div>
	</div>
</template>

<script>
import request from '@/api/request/axios'

export default {
	name: 'SubHome1',
	methods: {
		requestTest() {
			request.get('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response))
		},
	},
}
</script>

<style lang="less" scoped>
.sub-home-1 {
	padding: 20px;
	text-align: center;
	font-size: 32px;
	font-weight: 600;
}
</style>
