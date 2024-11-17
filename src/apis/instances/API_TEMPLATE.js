import axios from "axios";


const apiInstance = (url) => {
	const instance = axios.create({
		baseURL: url,
		headers: {
			"Content-Type": "application/json",
		},
	})

	instance.interceptors.request.use(request => {
		console.log("Starting Request:\n", request)
		return request
	})

	instance.interceptors.response.use(response => {
			console.log(`Got response:\n${response}`)
			return response;
		},
		error => {
			console.log(error)
			return Promise.reject(error.message);
		})

	return instance
}

export default apiInstance