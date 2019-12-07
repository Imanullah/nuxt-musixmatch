const { resolve } = require('path')
const methods = require('./methods.js')

module.exports = function (moduleOptions) {
	const options = { ...this.options.musixmatch, ...moduleOptions || {} }

	options.methods = methods

	this.addPlugin({
		src: resolve(__dirname, 'plugin.js'),
		fileName: 'nuxt-musixmatch.js',
		options
	})

	this.requireModule(['@nuxtjs/axios'])
}

module.exports.meta = require('../package.json')
