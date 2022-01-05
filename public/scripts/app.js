'use strict';

var template = React.createElement(
  'h1',
  null,
  'This is JSX from app.js v2'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
