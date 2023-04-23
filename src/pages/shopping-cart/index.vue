<template>
	<div class="shopping-cart">
		<div class="shopping-cart-title">购物车示例-vuex使用demo</div>
		<div class="shopping-cart-account">账号：{{ email }}</div>
		<hr />
		<ProductList />
		<hr />
		<ShoppingCart />
	</div>
</template>

<script>
import { mapState } from 'vuex'
import ProductList from './components/product-list/indev.vue'
import ShoppingCart from './components/shopping-cart-list/index.vue'

export default {
	components: { ProductList, ShoppingCart },
	computed: mapState({
		email: state => state.userInfo.email,
	}),
}
</script>

<style lang="less">
.shopping-cart {
	min-height: 540px;
	&-title {
		height: 60px;
		line-height: 60px;
		text-align: center;
		background-color: #eeeeee;
	}
	&-account {
		height: 60px;
		line-height: 60px;
		padding-left: 20px;
	}
}
</style>
