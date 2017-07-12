require('../styles/components/itemInfo.scss');

import React from 'react';
/**
 * 引入组件
 */
import HeaderTitle from '../components/headerTitle';
import ItemList from '../components/itemList';
/**
 * 列表信息
 */

class ItemInfo extends React.Component{
    render(){
        return(
            <section>
                <HeaderTitle headerText={this.props.headerText} headerUrl={this.props.headerUrl}/>
                <div className="section-content">
                    <ul className="row items">
                        <ItemList detailUrl={this.props.detailUrl} 
                                  movieName={this.props.movieName} 
                                  star={this.props.star} 
                                  rate={this.props.rate}
                                  starStyle={this.props.starStyle}/>
                    </ul>
                </div>
            </section>
        )
    }
}

export default ItemInfo;