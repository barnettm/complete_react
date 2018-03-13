'use strict';

console.log('app.js is running');

var template = React.createElement(
  'h1',
  null,
  'Indecision'
);
var appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);
