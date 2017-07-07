require('../lib/css/base.css');
require('../lib/js/initFontSize.min.js');
// let container = document.getElementById('app');

/**
 * 引入模块
 */
import React from 'react';
// import ReactList from '../router/router';
/**
 * 引入组件
 */
import Nav from '../components/Nav';

class AppComponent extends React.Component {
  render(){
		return (
			<div>
				<Nav/>
				{/*<ReactList />*/}
			</div>
			)
	}
}

AppComponent.defaultProps = {

};

// Render the router component into the dom
// ReactDOM.render(<ReactList />,container);

export default AppComponent;