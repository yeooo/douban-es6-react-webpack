require('../styles/views/home.scss');

import React from 'react';

//快捷链接数据
let quickDatas = require('json!../data/quikData.json');

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
// class InfoList extends React.Component{
//     render(){
//         return(
//             <a className = "feed-item">
//                 <div className = "feed-content">
//                     <div className = "cover" style={this.props.data.cover}>
//                         <div style="padding-top: '100%'"></div>
//                     </div>
//                     <h3>{this.props.data.feedTitle}</h3>
//                     <p>{this.props.data.feedDetail}</p>
//                 </div>
//                 <div className="author">
//                     {/*<!-- react-text: 11 -->*/}
//                     by&nbsp;
//                     {/*<!-- /react-text -->*/}
//                     <span class="name">{this.props.data.author}</span>
//                 </div>
//                 <span class="feed-label">{this.props.data.kind}</span>
//             </a>
//         )
//     }
// }

/**
 * 首页文章容器组件
 */
class InfoListContainer extends React.Component{
    render(){
        return(
            <div>
                <div className="feed-section">
                    <a className = "feed-item">
                        <div className = "feed-content">
                            <div className = "cover">
                                <div style={{paddingTop: '100%'}}></div>
                            </div>
                            <h3>今晚我有空 | 这部讲述三十岁女性的电影，绝对是今年港片的一个惊喜</h3>
                            <p>下班之后，睡觉以前，让好电影与你相伴。女性题材影片《29+1》，成为今年港片惊喜之作。最值得推荐的影视内容，都在这里了！</p>
                        </div>
                        <div className = "author">
                            by&nbsp;
                            <span className="name">豆瓣电影</span>
                        </div>
                        <span className="feed-label">来自栏目 今晚我有空</span>
                    </a>
                    <a className = "feed-item">
                        <div className = "feed-content">
                            <div className = "cover">
                                <div style={{paddingTop: '100%'}}></div>
                            </div>
                            <h3>今晚我有空 | 这部讲述三十岁女性的电影，绝对是今年港片的一个惊喜</h3>
                            <p>下班之后，睡觉以前，让好电影与你相伴。女性题材影片《29+1》，成为今年港片惊喜之作。最值得推荐的影视内容，都在这里了！</p>
                        </div>
                        <div className = "author">
                            by&nbsp;
                            <span className="name">豆瓣电影</span>
                        </div>
                        <span className="feed-label">来自栏目 今晚我有空</span>
                    </a>
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