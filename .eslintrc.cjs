module.exports = {
	env: {
		browser: true,
		node: true
	},
	extends: [ '@itcode-dev', 'plugin:storybook/recommended' ],
	ignorePatterns: [ '*.d.ts', 'node_modules', 'dist' ]
};