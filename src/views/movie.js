import React from 'react';
require('../styles/views/movie.scss');
/**
 * 头部标题
 */
class MovieHeader extends React.Component{
    render(){
        return(
            <header>
                <h2>{this.props.headerText}</h2>
                <a href={this.props.headerUrl}>更多</a>
            </header>
        )
    }
}
/**
 * 单个电影信息
 */
class SingleMoiveItem extends React.Component{
    render(){
        return(
            <div></div>
        );
    }
}
/**
 * 电影列表信息
 */
class MovieLists extends React.Component{
    render(){
        return(
            <div></div>
        );
    }
}
class MyMovie extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
               <MovieHeader headerText="热映电影" headerUrl="javascript:;"/>
            </div>
    )}
}

export default MyMovie;
