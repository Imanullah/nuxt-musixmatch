module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module'
	},
	extends: [
    '@nuxtjs'
  ],
	rules: {
		'indent': 'off',
		'vue/html-indent': 'off',
		'no-tabs': 0,
		'space-before-function-paren': ['error', {
			anonymous: 'ignore',
			named: 'ignore',
			asyncArrow: 'always'
    }]
	}
}
