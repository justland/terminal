module.exports = {
	env: {
		jest: true
	},
	parserOptions: {
		sourceType: 'module'
	},
	overrides: [
		{
			extends: ['plugin:harmony/ts-prettier'],
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/require-await': 'off',
				'harmony/ts-member-delimiter-style': 'off',
				'no-use-before-define': 'off',
			},
		}
	]
}
