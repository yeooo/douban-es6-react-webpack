require('../styles/components/itemList.scss');

import React from 'react';
import RateStar from '../components/rateStar';

/**
 * 单个item信息组件
 */
 class SingleItem extends React.Component{
     render(){
         return(
            <li className="item item__movie">
                <a href={this.props.data.detailUrl}>
                    <div className="item-poster" style={{ backgroundImage : 'url('+ this.props.data.cover_url+')' }}></div> 
                    <span className="item-title">{this.props.data.title}</span>
                    <RateStar star={this.props.data.star} 
                              rate={this.props.data.rate} 
                              starLength={this.props.data.starLength} 
                              starStyle={this.props.data.starStyle}/> 
                </a>
            </li>
         )
     }
 }
/**
 * 列表信息
 */

export default SingleItem;