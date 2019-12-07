const { resolve } = require('path')

module.exports = {
	rootDir: resolve(__dirname, '..'),
	buildDir: resolve(__dirname, '.nuxt'),
	srcDir: __dirname,
	render: {
		resourceHints: false
	},
	modules: [
		{ handler: require('../') },
		'@nuxtjs/axios'
  ],
	musixmatch: {
		apikey: '675e3a9f82e8d7616a11cc1fb62b332c',
		proxyURL: '/api/'
	},
	axios: {
		// baseURL: 'https://api.musixmatch.com/ws/1.1/',
		proxy: true
	},

	proxy: {
		'/api/': {
			target: 'https://api.musixmatch.com/ws/1.1/',
			pathRewrite: { '^/api/': '' }
		}
	}
}
