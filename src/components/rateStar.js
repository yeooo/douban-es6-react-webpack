require('../styles/components/rateStar.scss');
import React from 'react';
/**
 * 评价人数
 */
class JudgePeople extends React.Component{
    render(){
        return(
            <span>{this.props.judge}评价</span>
        )
    }
}
/**
 * 评分组件
 */
class RateStar extends React.Component{
    static defaultProps = {
        starLength : 5//默认评分星星长度
    }
    render(){
        let starFigurges = [],
            starkDatas =[],
            starYllowStyle = "rating-star " + "rating-star-"+this.props.starStyle+"-full",
            starGrayStyle = "rating-star " + "rating-star-"+this.props.starStyle+"-gray";
            starkDatas.length = Number(this.props.star);
        //黄色星星
        for(var i = 0; i < starkDatas.length ;i++){
            starFigurges.push(<span className={starYllowStyle} key={i}></span>);
        }
        //灰色星星
        for(var i = 0; i < Number(this.props.starLength) - starkDatas.length ;i++){
            console.log(Number(this.props.starLength) - starkDatas.length);
            starFigurges.push(<span className={starGrayStyle} key={Number(this.props.starLength) - i}></span>);
        }
        return(
            <div className="item-rating">
                <div className="rank">
                    <span className="rating-stars" data-rating={this.props.star}>
                        {starFigurges}
                    </span>
                    <span>{this.props.rate}</span>
                     {this.props.judge ? <JudgePeople judge={this.props.judge}/> : ''} 
                </div>
            </div>
        )
    }
}

export default RateStar;