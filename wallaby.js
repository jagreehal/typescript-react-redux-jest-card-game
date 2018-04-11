module.exports = function(wallaby) {
  return {
    debug: false,
    files: [
      '@(components|containers|lib|pages|redux|cards|types)/**/*.ts?(x)',
      'package.json',
      'tsconfig.json',
      'test/index.ts',
      '!@(components|containers|lib|pages|redux|cards)/**/*.spec.ts?(x)'
    ],
    tests: ['@(components|containers|lib|pages|redux|cards)/**/*.spec.ts?(x)'],
    env: { type: 'node', runner: 'node' },
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        typescript: require('typescript'),
        module: 'commonjs'
      })
    },
    testFramework: 'jest',
    setup: function(wallaby) {
      var jestconfig = require('./package.json').jest;
      wallaby.testFramework.configure(jestconfig);
    }
  };
};
