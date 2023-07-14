module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    parser: 'typescript',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['tsconfig.json'],
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  overrides: [
    {
      files: ['src/**/*.tsx'],
      rules: {
        quotes: [2, 'single'],
      },
    },
  ],
  rules: {
    camelcase: 0,
    'consistent-return': 0,
    'no-nested-ternary': 0, // TODO: Should be removed
    'no-use-before-define': 0,
    'no-unused-vars': 0,
    'no-unused-expressions': 0,
    'no-undef': 0, // TODO: Should be removed
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'prefer-promise-reject-errors': 0,
    'no-case-declarations': 0,
    'func-names': 0,
    'import/no-dynamic-require': 0,
    'global-require': 1,
    'no-shadow': 0, // TODO: Should be removed
    'no-fallthrough': 0, // TODO: Should be removed
    'class-methods-use-this': 0, // TODO: Should be removed
    'default-case': 0, // TODO: Should be removed
    'no-new': 0,
    'no-redeclare': 0,
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-unused-vars': [2, { ignoreRestSiblings: true }],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/order': [
      2,
      {
        groups: ['builtin', ['external', 'internal'], ['index', 'sibling', 'parent']],
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{@api-client,@common-ui,@common-ui/**,@api-client/**,@abtasty/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@dashboard/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '*.{css,scss}',
            patternOptions: { matchBase: true },
            group: 'index',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,

    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/aria-role': 0,
    'jsx-a11y/aria-props': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'prettier/prettier': [
      'error',
      {
        parser: 'babel-ts',
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/state-in-constructor': 0,
    'react/destructuring-assignment': 0,
    'react/button-has-type': 0, // TODO: Should be removed
    'react/static-property-placement': 0,
    'react/sort-comp': 0,
    'react/no-did-update-set-state': 0,
    'react/jsx-no-target-blank': 0,
    'react/display-name': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
  },
  ignorePatterns: ['*.d.ts'],
};
