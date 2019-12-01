import Axios from 'axios'
const options = JSON.parse(`<%= JSON.stringify(options) %>`)

function Musixmatch() {
	if (!(this instanceof Musixmatch)) {
		return new Musixmatch()
	}
	this._data = {
		apikey: options.apikey ? options.apikey : '',
		format: options.format ? options.format : 'json'
	}
}

function setBaseURL() {
	const rootURL = options.rootURL ? options.rootURL : 'https://api.musixmatch.com/ws/1.1/'
	const corsURL = options.corsURL || options.corsURL === '' ? options.corsURL : 'https://cors-anywhere.herokuapp.com/'
	const uri = `${corsURL}/${rootURL}`
	return uri.replace(/^\/|([^:]\/)\/+/g, '$1')
}

const methods = options.entryMethods
methods.forEach(function (entry) {
	Musixmatch.prototype[entry.method] = async function (params, response) {
		const xparams = { ...this._data, ...params }
		const uri = `/${entry.name}`
		const instance = Axios.create({
			baseURL: setBaseURL(),
			headers: [
				{ 'Access-Control-Allow-Origin': '*' },
				{ 'Content-Type': 'application/json' },
				{ 'Accept': 'application/json' }
			]
		})

		try {
			const res = await instance.get(uri, { params: xparams })
			return res.data.message.body
		} catch (error) {
			// console.log('error', error)
		}
	}
})

export default async (ctx, inject) => {
	inject('musixmatch', Musixmatch())
}
