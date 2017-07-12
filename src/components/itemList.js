require('../styles/components/itemList.scss');

import React from 'react';
import RateStar from '../components/rateStar';
/**
 * 列表信息
 */
class ItemList extends React.Component{
    render(){
        return(
            <li className="item item__movie">
                <a href={this.props.detailUrl}>
                    <div className="item-poster"></div>
                    <span className="item-title">{this.props.movieName}</span>
                    <RateStar star={this.props.star} rate={this.props.rate} starLength={this.props.starLength} starStyle={this.props.starStyle}/>
                </a>
            </li>
        )
    }
}

export default ItemList;