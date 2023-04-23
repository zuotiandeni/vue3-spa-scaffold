// import Vue from 'vue'
// import Vuex from 'vuex'

// import cart from './modules/cart'
// import products from './modules/products'

// Vue.use(Vuex)

// export default new Vuex.Store({
// 	// 外层的公共state
// 	state: {
// 		userInfo: {
// 			email: 'xxxxxx@foxmail.com',
// 		},
// 	},
// 	modules: {
// 		cart,
// 		products,
// 	},
// })

// import { createStore } from 'vuex'

// export default createStore({
// 	state: {
// 		home: 'webpack create vue home-page',
// 		about: 'webpack create vue about-page',
// 	},
// 	mutations: {},
// 	actions: {},
// 	modules: {},
// })

// ~~~~~~~~
import { createStore } from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

// const debug = process.env.NODE_ENV !== 'production'

export default createStore({
	// 外层的公共state
	state: {
		userInfo: {
			email: 'xxxxxx@foxmail.com',
		},
	},
	modules: {
		cart,
		products,
	},
})
