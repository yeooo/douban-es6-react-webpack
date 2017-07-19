require('../../styles/views/search.scss');

import React from 'react';

/**
 * 搜索关键字链接组件
 */
class LinkController extends React.Component{
    render(){
        return(
            <div>
                <a href={this.props.linkUrl} target="_blank">
                    <strong style={{color:this.props.linkColor}}>{this.props.strongText}</strong>
                    <span>{this.props.spanText}</span>
                </a>
            </div>
        )
    }
}

class SearchPannel extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        let searchClassName = 'search-pannel ' + this.props.showPannelClass;
        return(
            <div>
                <div className = {searchClassName} ref = "search">
                    <a href="javascript:;" className="close-nav" onClick={this.props.cancelSearchPannel}>关闭</a>
                    <form action="/search" method="GET">
                        <div>
                            <input name="query" type="search" />
                        </div>
                    </form>
                    <ul>
                        <li>
                            <div>
                                <LinkController linkUrl="javascript:;" linkColor="rgb(35, 132, 232)" strongText="电影" spanText="影院热映"/>
                                <LinkController linkUrl="javascript:;" linkColor="rgb(230, 70, 126)" strongText="同城" spanText="周末活动"/>
                                <LinkController linkUrl="javascript:;" linkColor="rgb(159, 120, 96)" strongText="阅读" spanText="电子书"/>
                                <LinkController linkUrl="javascript:;" linkColor="rgb(225, 100, 77)" strongText="东西" spanText="心爱之物"/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <LinkController linkUrl="javascript:;" linkColor="rgb(122, 106, 219)" strongText="电视" spanText="正在热播"/>
                                <LinkController linkUrl="javascript:;" linkColor="rgb(42, 184, 204)" strongText="小组" spanText="志趣相投"/>
                                <LinkController linkUrl="javascript:;" linkColor="rgb(87, 116, 197)" strongText="游戏" spanText="虚拟世界"/>
                                <LinkController linkUrl="javascript:;" linkColor="rgb(64, 207, 169)" strongText="FM" spanText="红心歌单"/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <LinkController linkUrl="javascript:;" linkColor="rgb(159, 120, 96)" strongText="图书" spanText="畅销排行"/>
                                <LinkController linkUrl="javascript:;" linkColor="rgb(244, 143, 46)" strongText="音乐" spanText="新碟榜"/>
                                <LinkController linkUrl="javascript:;" linkColor="rgb(89, 108, 221)" strongText="应用" spanText="玩手机"/>
                                <LinkController linkUrl="javascript:;" linkColor="rgb(66, 189, 86)" strongText="市集" spanText="购买原创"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    )}
}

export default SearchPannel;