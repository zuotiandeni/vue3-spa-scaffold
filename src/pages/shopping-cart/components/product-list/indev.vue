<template>
	<div class="product-list">
		<div class="product-list-title">产品列表</div>
		<ul>
			<li v-for="product in products" :key="product.id" class="product-list-item">
				<div>{{ product.title }} - {{ product.price }}</div>
				<div>
					数量：
					<select v-model="numbers[product.id]">
						<option v-for="n in product.inventory" :key="n" :value="n">{{ n }}</option>
					</select>
				</div>
				<button :disabled="!product.inventory" @click="addProductToCart(product)">加入购物车</button>
			</li>
		</ul>
	</div>
</template>

<script>
import { ref } from 'vue'
import { mapState } from 'vuex'

export default {
	data() {
		return {
			numbers: ref({}),
		}
	},

	computed: mapState({
		products: state => state.products.all,
	}),

	watch: {
		// 添加 immediate: true 后该回调将会在侦听开始之后被立即调用
		products: {
			handler(val) {
				// const that = this
				val.forEach(product => {
					if (this.numbers[product.id] === undefined) {
						this.numbers[product.id] = 1
					}
				})
			},
			immediate: true,
		},
	},

	created() {
		this.$store.dispatch('products/getAllProducts')
	},

	methods: {
		addProductToCart(product) {
			this.$store.dispatch('cart/addProductToCart', { product, number: this.numbers[product.id] })
			this.numbers[product.id] = 1
		},
	},
}
</script>

<style lang="less">
.product-list {
	padding: 20px;
	&-title {
		font-size: 32px;
		padding-bottom: 20px;
	}
	&-item {
		padding-bottom: 20px;
	}
	div {
		padding-bottom: 10px;
	}
}
</style>
