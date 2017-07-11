import React from 'react';

require('../styles/views/movie.scss');
/**
 * 标题
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
class MovieItem extends React.Component{
    render(){
        return(
            <li className="item item__movie">
                <a href={this.props.movieURl}>
                    <div className="item-poster" style={{backgroundImage:url('https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2469070974.jpg?imageView2/0/q/80/w/9999/h/200/format/jpg')}}></div>
                    <span className="item-title">{this.props.movieName}</span>
                    <div className="item-rating">
                        <div className="rank">
                            <span className="rating-stars" data-rating={this.props.star}>
                                <span className="rating-star rating-star-small-full"></span>
                                <span className="rating-star rating-star-small-full"></span>
                                <span className="rating-star rating-star-small-full"></span>
                                <span className="rating-star rating-star-small-gray"></span>
                                <span className="rating-star rating-star-small-gray"></span>
                            </span> 
                            <span>{this.props.rate}</span>
                        </div>
                    </div>
                </a>
            </li>
        )
    }
}
/**
 * 影片容器
 */
class MovieSlider extends React.Component{
    render(){
        return(
            <div class="section-content">
                <ul class="row items">
                    
                </ul>
            </div>
        )
    }
}

class MyMovie extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="page">
                <MovieHeader headerText="影院热映" headerUrl="javascript:;"/>
            </div>
    )}
}

export default MyMovie;
