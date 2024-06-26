module.exports = {
	env: {
		node: true,
		es2021: true,
	},
	overrides: [],
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.svg', '.json'],
				paths: ['.'],
			},
		},
	},
	parser: '@typescript-eslint/parser',
	extends: ['airbnb-typescript', 'airbnb/hooks'],
	parserOptions: {
		project: ['./tsconfig.json'],
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		eqeqeq: 1,
		'no-undef': 2,
		'no-useless-rename': 1,
		'@typescript-eslint/no-unused-expressions': 'off',
		'@typescript-eslint/no-use-before-define': 1,
		'no-loop-func': 1,
		'no-restricted-syntax': 'off',
		'no-restricted-properties': 1,
		'react/jsx-fragments': 1,
		'no-useless-return': 1,
		'react/static-property-placement': 'off',
		'array-callback-return': 1,
		radix: 'off',
		'no-prototype-builtins': 1,
		'no-confusing-arrow': 1,
		'react/no-unused-prop-types': 1,
		'no-lonely-if': 1,
		'no-return-assign': 'off',
		'prefer-template': 1,
		'react/jsx-boolean-value': 'off',
		'react/no-access-state-in-setstate': 'off',
		'vars-on-top': 1,
		'space-in-parens': 'off',
		'react/no-array-index-key': 'off',
		'class-methods-use-this': 'off',
		'import/order': 'off',
		'operator-linebreak': 'off',
		'react/prefer-stateless-function': 'off',
		'prefer-destructuring': 'off',
		'react/jsx-wrap-multilines': 'off',
		'object-shorthand': 1,
		'@typescript-eslint/indent': 'off',
		'no-param-reassign': 1,
		'prefer-arrow-callback': 1,
		'@typescript-eslint/brace-style': 'off',
		'react/no-unused-state': 'off',
		'no-shadow': 'off',
		'import/prefer-default-export': 'off',
		'@typescript-eslint/no-useless-constructor': 'off',
		'react/jsx-closing-tag-location': 'off',
		'react/jsx-closing-bracket-location': 'off',
		'max-classes-per-file': 'off',
		'react/no-unescaped-entities': 'off',
		'react/sort-comp': 'off',
		'no-unneeded-ternary': 'off',
		'object-curly-newline': 'off',
		'implicit-arrow-linebreak': 'off',
		'no-else-return': 'off',
		'react/state-in-constructor': 'off',
		'no-underscore-dangle': 'off',
		'lines-between-class-members': 'off',
		'@typescript-eslint/camelcase': 'off',
		'object-curly-spacing': 'off',
		'react/jsx-curly-brace-presence': 'off',
		'consistent-return': 'off',
		'no-console': 'off',
		'global-require': 'off',
		'react/destructuring-assignment': 'off',
		'react/jsx-props-no-spreading': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-case-declarations': 'off',
		'no-constant-condition': 'off',
		'react/no-did-update-set-state': 'off',
		'no-return-await': 'off',
		'import/extensions': 'off',
		'react/jsx-curly-newline': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/require-default-props': 'off',
		'no-nested-ternary': 'off',
		'arrow-body-style': 'off',
		'no-plusplus': 'off',
		'operator-assignment': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'no-empty': 'off',
		'react/jsx-no-bind': 'off',
		'react/prop-types': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
		'linebreak-style': 'off', // Needed for Windows development to avoid UNIX breakline errors
		'react/forbid-prop-types': 'off',
		'default-case': 'off',
		'spaced-comment': 'off',
		'react/jsx-props-no-multi-spaces': 'off',
		'function-paren-newline': 'off',
		'no-spaced-func': 'off',
		'func-call-spacing': 'error',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/default-param-last': 'off',
		'react-native/no-inline-styles': 'off',
		'react/react-in-jsx-scope': 'off',
		'jsx-quotes': ['warn', 'prefer-single'],
		'react/no-unstable-nested-components': 'off',
		'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
		'@typescript-eslint/lines-between-class-members': 'off',
	},
	ignorePatterns: ['**/__tests__/*'], // <<< ignore all files in test folder
	globals: {
		NodeJS: true,
		node: true,
		Event: true,
		JSX: true,
		require: true,
		module: true,
		__dirname: true,
		setTimeout: true,
		__DEV__: true,
		console: true,
	},
};
