module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'jorch-romera'
  ],
  'plugins': ['react'],
  'parserOptions':  {
    'ecmaFeatures':  {
      'jsx':  true
    },
  },
  'settings': {
    'react': {
      'pragma': 'React',
      'version': 'detect'
    }
  },
  'rules': {
    'react/prop-types': 'off'
  }
};
