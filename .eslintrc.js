// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
     // allow async-await
     'generator-star-spacing': 'off',
     // allow debugger during development
     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
     "requireStringLiterals": true,
     "no-multiple-empty-lines": [0, {"max": 100}],
     //关闭禁止混用tab和空格
     "no-mixed-spaces-and-tabs": [0],
     //关闭严格回调检查
     "no-callback-literal": false
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true,
    requirePlugin: true
  }
}
