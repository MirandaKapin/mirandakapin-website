var React = require('react');
var ReactDOM = require('react-dom');
// var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import Main from 'Main';

// Load foundation
$(document).foundation();

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-89708127-1', 'auto');
ga('send', 'pageview');

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
);
