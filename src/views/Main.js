require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
// 引入React-Router模块
import { Router,Route,hashHistory,IndexRoute} from 'react-router'

import Banner from '../components/topBar';
import myIndex from '../views/home';
// import myMovie from '../views/Movie';
// import myBook from '../views/book';
// import myNetwork from '../views/network';
// import myGroup from '../views/group';


class AppComponent extends React.Component {
  render(){
		return (
			<div>xxx</div>
			)
	}
}
React.render((
	<Router history={hashHistory} >
		<Route path="/" component={Banner}>
			<IndexRoute  component={myIndex} />
			<Route path="home" component={myIndex} />
			
			{/*<Route path="movie" component={myMovie} />
			<Route path="book" component={myBook} />
			<Route path="network" component={myNetwork} />
			<Route path="group" component={myGroup} />*/}
		</Route>
	</Router>
), document.body)
AppComponent.defaultProps = {
};

export default AppComponent;
