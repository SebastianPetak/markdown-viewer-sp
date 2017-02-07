var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var TextContainer = require('../containers/TextContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
		<IndexRoute component={TextContainer} />
    </Route>
  </Router>
);

module.exports = routes;
