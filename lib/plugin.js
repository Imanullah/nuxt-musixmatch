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
	this.publicCorsURL = 'https://api.musixmatch.com/ws/1.1/'
	this.response = null
}

const methods = options.entryMethods
methods.forEach(function (entry) {
	Musixmatch.prototype[entry.method] = async function (params, response) {
		const xparams = { ...this._data, ...params }
		const uri = `/${entry.name}`
		const instance = Axios.create({
			baseURL: 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/',
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
