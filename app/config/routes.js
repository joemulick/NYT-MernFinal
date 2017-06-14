

//Include the React library
var React = require('react');

//Include the react-router module
var router = require('react-router');

var Route = router.Route;

//Include the Router component to contain all our routes
//Here is where we can pass in some configuration as props

var Router = router.Router;

//Include the hashHistory prop to handle routing client side without a server
// var hashHistory = router.hashHistory;
var hashHistory = router.hashHistory;
//Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;


import Main from '../components/Main';
import SavedContainer from '../components/containers/SavedContainer';
import SearchContainer from '../components/containers/SearchContainer';


module.exports = (

//the high level component is the Router component 

 <Router history = {hashHistory}>
        <Route path="/" component={Main}>

<Route path="saved" component={SavedContainer} />
<Route path="search" component={SearchContainer} />

<IndexRoute component={SearchContainer} />

</Route>
</Router>

);
