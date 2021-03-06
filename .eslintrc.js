module.exports = {
	extends: [
		'react-app',
		'react-app/jest',
		'eslint:recommended',
		'prettier',
	],
	env: {
		browser: true,
		es6: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'arrow-spacing': 'error',
		'computed-property-spacing': [ 'error', 'always' ],
		'constructor-super': 'error',
		eqeqeq: 'error',
		'no-caller': 'error',
		'no-cond-assign': [ 'error', 'except-parens' ],
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': 'error',
		'no-eq-null': 'error',
		'no-irregular-whitespace': 'error',
		'no-trailing-spaces': 'error',
		'no-undef': 'error',
		'no-unused-expressions': 'error',
		'no-unused-vars': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'one-var': [ 'error', 'consecutive' ],
		'prefer-const': [ 'error', { destructuring: 'all' } ],
		quotes: [
			'error',
			'single',
			{ allowTemplateLiterals: true, avoidEscape: true },
		],
		'space-unary-ops': [
			'error',
			{ overrides: { '!': true, yield: true } },
		],
		'template-curly-spacing': [ 'error', 'always' ],
		'wrap-iife': [ 'error', 'any' ],
		'arrow-parens': [ 'error', 'always' ],
		curly: 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react/display-name': 'off',
		'react/jsx-curly-spacing': [
			'error',
			{ when: 'always', children: true },
		],
		'react/jsx-equals-spacing': 'error',
		'react/jsx-indent-props': [ 'error', 'tab' ],
		// 'react/jsx-indent': [ 'error', 'tab' ],
		'react/jsx-key': 'error',
		'react/jsx-tag-spacing': 'error',
		'react/no-children-prop': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
	},
	overrides: [
		{
			files: [ '**/*.ts?(x)' ],
			rules: {
				'additional-typescript-only-rule': 'warn',
			},
		},
		{
			files: [ '**/stories.js?(x)' ],
			rules: {
				'import/no-anonymous-default-export': 'off',
			},
		},
	],
	ignorePatterns: [ '**/*.css' ],
};
