const { resolve } = require('path')

module.exports = function (moduleOptions) {
	const options = { ...this.options.musixmatch, ...moduleOptions || {}, ...{ entryMethods } }

	this.addPlugin({
		src: resolve(__dirname, 'plugin.js'),
		fileName: 'musixmatch.js',
		options
	})
}

module.exports.meta = require('../package.json')
