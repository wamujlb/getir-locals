module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'no-undef': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': 'off',
        'testing-library/prefer-screen-queries': 'off',
        'jest/no-mocks-import': 'off',
        'react/require-default-props': [
          'off',
          { forbidDefaultForRequired: false, ignoreFunctionalComponents: true },
        ],
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['**/*.test.*'],
          },
        ],
        'jsx-a11y/label-has-associated-control': [
          'error',
          {
            required: {
              some: ['nesting', 'id'],
            },
          },
        ],
        'jsx-a11y/label-has-for': [
          'error',
          {
            required: {
              some: ['nesting', 'id'],
            },
          },
        ],
      },
    },
    {
      files: ['**/*.slice.ts'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/no-unescaped-entities': ['off', {}],
      },
    },
  ],
};
