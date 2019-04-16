'use strict'

// import axios from 'axios'
// import qs from 'qs'
const ctx = process.env.VUE_APP_APIURL
// axios.interceptors.request.use(config => {
// 	// loading
// 	return config
// }, error => {
// 	return Promise.reject(error)
// })

// axios.interceptors.response.use(response => {
// 	return response
// }, error => {
// 	return Promise.resolve(error.response)
// })

// function checkStatus(response) {
// 	// loading
// 	// 如果http状态码正常，则直接返回数据
// 	if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
// 		return response.data
// 		// 如果不需要除了data之外的数据，可以直接 return response.data
// 	}
// 	// 异常状态下，把错误信息返回去
// 	return {
// 		status: -404,
// 		msg: '网络异常'
// 	}
// }

// function checkCode(res) {
// 	// 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
// 	if (res.status === -404) {
// 	}
// 	if (res.data && (!res.data.success)) {
// 	}
// 	return res
// }

export default {
	fetch(url, data) {
		let Public = { //公共参数

		}
		// let param = Object.assign(Public, data);
		let param = new URLSearchParams(Object.assign(Public, data));
		// console.log(param)
		return fetch(url, {
			method: "post",
			credentials: "include",
			body: param
		}).then(response => {
			return response.json();
			throw new Error("网络请求响应不OK");
		})
	},
	// post(url, data) {
	// 	let Public = { //公共参数

	// 	}
	// 	let param = new URLSearchParams(Object.assign(Public, data));
	// 	return axios({
	// 		method: 'post',
	// 		baseURL: '',
	// 		url,
	// 		data: param,
	// 		timeout: 10000,
	// 		headers: {
	// 			'X-Requested-With': 'XMLHttpRequest',
	// 			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	// 		}
	// 	}).then(
	// 		(response) => {
	// 			return checkStatus(response)
	// 		}
	// 	).then(
	// 		(res) => {
	// 			return checkCode(res)
	// 		}
	// 	)
	// },
	// get(url, params) {
	// 	return axios({
	// 		method: 'get',
	// 		baseURL: '',
	// 		url,
	// 		params, // get 请求时带的参数
	// 		timeout: 10000,
	// 		headers: {
	// 			'X-Requested-With': 'XMLHttpRequest'
	// 		}
	// 	}).then(
	// 		(response) => {
	// 			return checkStatus(response)
	// 		}
	// 	).then(
	// 		(res) => {
	// 			return checkCode(res)
	// 		}
	// 	)
	// }
}
