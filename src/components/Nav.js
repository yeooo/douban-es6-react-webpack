require('../styles/components/Nav.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import SearchPannel from '../views/search';

class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.showResearchPannel = this.showResearchPannel.bind(this);
        this.state = {
            showPannel : '',
        }
    }
    //搜索按钮--点击显示搜索面板组件
    showResearchPannel(e){
        e.stopPropagation();
		e.preventDefault();
        this.setState({
            showPannel : 'show-pannel',
        });
    }

    render(){
        return(
            <div>
                <header className="nav" ref = "nav">
                    <div className="nav-con">
                        <a href="javascript:;"><h1>豆瓣</h1></a>
                        <nav>
                            <ul>
                                <li><a href="javascript:;" style={{color: '#2384E8'}}>电影</a></li>
                                <li><a href="javascript:;" style={{color: '#9F7860'}}>图书</a></li>
                                <li><a href="javascript:;" style={{color: '#E4A813'}}>广播</a></li>
                                <li><a href="javascript:;" style={{color: '#2AB8CC'}}>小组</a></li>
                                <span onClick={ this.showResearchPannel }></span>
                            </ul>
                        </nav>
                    </div>
                </header>
                <SearchPannel showPannelClass={ this.state.showPannel }/>
            </div>
    )}
}

export default Nav;