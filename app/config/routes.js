var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var TextContainer = require('../containers/TextContainer');

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
		<IndexRoute component={TextContainer} />
    </Route>
  </Router>
);

module.exports = routes;
