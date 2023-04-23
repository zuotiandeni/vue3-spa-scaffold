// /**
//  * 对axios进行封装
//  * 1、统一处理loading
//  * 2、统一处理http status
//  */

import axios from 'axios'
// import { Message } from 'element-ui'

// 添加请求拦截器
axios.interceptors.request.use(
	config => {
		// 在发送请求之前做些什么
		// let token = sessionStorage.getItem('wti-manager-token')
		// token = token ? `${token}` : ''
		// config.headers.Authorization = token
		return config
	},
	error => {
		// 对请求错误做些什么
		return Promise.reject(error)
	},
)

// 添加响应拦截器
axios.interceptors.response.use(
	response => {
		// 2xx 范围内的状态码都会触发该函数。
		// 对响应数据做点什么
		return response
	},
	error => {
		// 超出 2xx 范围的状态码都会触发该函数。
		// 对响应错误做点什么
		return Promise.reject(error)
	},
)

const request = {
	get(url, params, extraConfig) {
		return axios({
			method: 'get',
			url,
			params,
			...extraConfig,
		})
	},

	post(url, data, extraConfig) {
		return axios({
			method: 'post',
			url,
			data,
			...extraConfig,
		})
	},

	put(url, data, extraConfig) {
		return axios({
			method: 'put',
			url,
			data,
			...extraConfig,
		})
	},

	delete(url, params, extraConfig) {
		return axios({
			method: 'delete',
			url,
			params,
			...extraConfig,
		})
	},
}

export default request
