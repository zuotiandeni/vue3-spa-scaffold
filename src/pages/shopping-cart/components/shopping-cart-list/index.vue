<template>
	<div class="shopping-cart-list">
		<div class="shopping-cart-list-title">购物清单</div>

		<div v-show="!products.length" class="shopping-cart-list-tips">tips：请添加产品到购物车</div>

		<ul>
			<li v-for="product in products" :key="product.id" class="shopping-cart-list-item">
				{{ product.title }} - {{ product.price }} x {{ product.quantity }}
			</li>
		</ul>

		<div class="shopping-cart-list-total">合计: {{ total }}</div>

		<button :disabled="!products.length" @click="checkout(products)">提交</button>

		<div v-show="checkoutStatus" class="shopping-cart-list-result">提交结果 {{ checkoutStatus }}.</div>
	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
	computed: {
		...mapState({
			checkoutStatus: state => state.cart.checkoutStatus,
		}),
		...mapGetters('cart', {
			products: 'cartProducts',
			total: 'cartTotalPrice',
		}),
		// ...mapGetters({
		//   products: 'cart/cartProducts',
		//   total: 'cart/cartTotalPrice'
		// })
	},
	// computed: {
	//   checkoutStatus(){
	//     return this.$store.state.cart.checkoutStatus
	//   },
	//   products() {
	//     return this.$store.getters['cart/cartProducts']
	//   },
	//   total() {
	//     return this.$store.getters['cart/cartTotalPrice']
	//   }
	// },
	methods: {
		checkout(products) {
			this.$store.dispatch('cart/checkout', products)
		},
	},
}
</script>

<style lang="less">
.shopping-cart-list {
	padding: 20px;
	&-title {
		font-size: 32px;
		padding-bottom: 20px;
	}
	&-tips {
		padding-bottom: 20px;
	}
	&-item {
		padding-bottom: 20px;
	}
	&-total {
		padding-bottom: 20px;
	}
	&-result {
		padding-top: 20px;
	}
}
</style>
