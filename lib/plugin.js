const options = JSON.parse(`<%= JSON.stringify(options) %>`)

function Musixmatch(obj) {
	if (!(this instanceof Musixmatch)) return new Musixmatch(obj)
	var obj = obj ? obj : {}
	this._data = {
		apikey: obj.apikey ? obj.apikey : '',
		format: obj.format ? obj.format : 'json'
	}
	this.baseURL = obj.baseURL ? obj.baseURL : 'https://api.musixmatch.com/ws/1.1/'
	this.corsURL = obj.corsURL || obj.corsURL === '' ? obj.corsURL : 'https://cors-anywhere.herokuapp.com/'
	this.proxyURL = obj.proxyURL ? obj.proxyURL : ''
}

const methods = options.methods
export default async ({ $axios }, inject) => {

	methods.forEach(function (entry) {
		Musixmatch.prototype[entry.method] = async function (params) {
			const xparams = Object.assign({}, this._data, params)
			const url = this.proxyURL ? `${this.proxyURL}${entry.name}` : `/${entry.name}`

			if (!this.proxyURL) {
				const base = `${this.corsURL}/${this.baseURL}`
				const baseUrl = base.replace(/^\/|([^:]\/)\/+/g, '$1')
				$axios.setBaseURL(baseUrl)
			}
			try {
				const res = await $axios.$get(url, { params: xparams })
					.then(res => res)
					.then(resdata => resdata.message.body)
				return res
			} catch (error) {
				throw error.response
			}
		}
	})

	inject('musixmatch', Musixmatch(options))
}
