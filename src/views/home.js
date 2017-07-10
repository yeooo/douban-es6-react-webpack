require('../styles/views/home.scss');

import React from 'react';

//数据
let quickDatas = require('json!../data/quikData.json'),
    feedsDatas = require('json!../data/recommend_feeds.json');
/**
 * 对首页列表数据重造
 */
feedsDatas = ((feedsDatasAtrr) => {
	for (let i = 0, j = feedsDatasAtrr.length; i < j; i++) {
		let singleFeedsDatas = feedsDatasAtrr[i];

		singleFeedsDatas.cover_url = {
            background:'url(' + singleFeedsDatas.cover_url +') center center / cover no-repeat rgb(250, 250, 250)',
            position:'relative'
        }

		feedsDatasAtrr[i] = singleFeedsDatas;
	}

	return feedsDatasAtrr;

})(feedsDatas);
/**
 * 快捷链接组件
 */
class NavLink extends React.Component{
    render(){
        return(
            <li>
                <a href = "this.props.data.quikUrl">{this.props.data.quikNavText}</a>
            </li>
        )
    }
}
/**
 * 快捷链接容器组件
 */
class QuikNav extends React.Component{
    render(){
        let quickFigurges = [];

        quickDatas.forEach((value,index)=>{
            quickFigurges.push(<NavLink data = {value} key = {index}/>);
        });

        return(
            <div>
                <ul className = "quick-nav">
                    {quickFigurges}
                </ul>
            </div>
        )
    }
}
/**
 * 首页文章单个列表组件
 */
class InfoList extends React.Component{
    render(){
        return(
            <a className = "feed-item">
                <div className = "feed-content">
                    {/*<div className = "cover" style={{background:'url('+ this.props.data.cover_url+')'}}>*/}
                    <div className = "cover" style = {this.props.data.cover_url}>
                        {/*<div style = { this.props.data.cover_url ? " paddingTop: '100%' " : ""}></div>*/}
                    </div>
                    <h3>{this.props.data.title}</h3>
                    <p>{this.props.data.desc}</p>
                </div>
                <div className="author">
                    {/*<!-- react-text: 11 -->*/}
                    by&nbsp;
                    {/*<!-- /react-text -->*/}
                    <span className="name">{this.props.data.name}</span>
                </div>
                <span className="feed-label">{this.props.data.source_cn}</span>
            </a>
        )
    }
}

/**
 * 首页文章容器组件
 */
class InfoListContainer extends React.Component{
    render(){
        let InfoListFigurges = [];
        feedsDatas.forEach((value,index)=>{
            InfoListFigurges.push(<InfoList data={value} key={index}/>);
        });

        return(
            <div>
                <div className="feed-section">
                    {InfoListFigurges}
                </div>
            </div>
        )
    }
}

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "home">
                <div className="card">
                    <QuikNav />
                    <div id="recommend-feed">
                        <InfoListContainer />
                    </div>
                </div>
                
            </div>
    )}
}

export default Home;