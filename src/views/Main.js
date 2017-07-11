require('../lib/css/base.css');
require('../styles/views/style.scss');
require('../lib/js/initFontSize.min.js');

/**
 * 引入模块
 */
import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
const history = createHistory()

/**
 * 引入组件
 */
import Nav from '../components/Nav';
import Home from '../views/home';
import MyIndex from '../views/home';
import MyMovie from '../views/Movie';
import MyBook from '../views/book';
import MyNetwork from '../views/network';
import MyGroup from '../views/group';

class AppComponent extends React.Component {
  	render(){
		return (
			<div>
				<Nav/>
				{/*<Home />*/}
				<Router history={history}>
					<Route render={({ location }) => {
						return(
							<div key={location.pathname} className="page">
								<Route location={location} exact path="/" component={MyIndex} />
								<Route location={location} path="/MyMovie" component={MyMovie} />
								<Route location={location} path="/MyBook" component={MyBook} />
								<Route location={location} path="/MyNetwork" component={MyNetwork} />
								<Route location={location} path="/MyGroup" component={MyGroup} />
							</div>
						)
					}}/>
          		</Router>
			</div>
			)
	}
}

export default AppComponent;