var tests = [];

for (var file in window.__karma__.files) {
  if (/Spec\.js$/.test(file)) {
    tests.push(file);
  }
}

requirejs.config({
  baseUrl: '/base/src',

  paths: {
    'bla': 'app'
  },
  deps: tests,

  callback: window.__karma__.start
});