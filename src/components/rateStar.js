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
        starLength : 5,//默认评分星星长度
        starStyle : 'small'
    }
    render(){
        let starFigurges = [],
            starkDatas =[],
            yellowStarLength = parseInt(this.props.star),
            starYllowStyle = 'rating-star ' + 'rating-star-'+this.props.starStyle+'-full',
            starGrayStyle = 'rating-star ' + 'rating-star'-+this.props.starStyle+'-gray';
        
        yellowStarLength = parseInt(this.props.star);
        if(this.props.star){
            //黄色星星
            for(var i = 0; i < yellowStarLength ;i++){
                starFigurges.push(<span className={starYllowStyle} key={i}></span>);
            }
            //灰色星星
            for(var i = 0; i < Number(this.props.starLength) - yellowStarLength ;i++){
                starFigurges.push(<span className={starGrayStyle} key={Number(this.props.starLength) - i}></span>);
            }
        }else{
            starFigurges.push(<span key={99}>暂无评分</span>);
        }
        
        return(
            <div className="item-rating">
                <div className="rank">
                    <span className="rating-stars" data-rating={ this.props.star }>
                         { starFigurges } 
                    </span>
                    <span>{ this.props.rate }</span>
                     {this.props.judge ? <JudgePeople judge={ this.props.judge }/> : ''} 
                </div>
            </div>
        )
    }
}

export default RateStar;