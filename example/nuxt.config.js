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
    '@nuxtjs/axios',
  ],
	axios: {
		proxy: true,
		proxyHeaders: false,
		retry: { retries: 3 },
		https: true
	},
	musixmatch: {
		apikey: '675e3a9f82e8d7616a11cc1fb62b332c',
	}
}
