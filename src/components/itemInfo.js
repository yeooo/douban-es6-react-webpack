require('../styles/components/itemInfo.scss');

import React from 'react';
/**
 * 引入组件
 */
import HeaderTitle from '../components/headerTitle';
import SingleItem from '../components/SingleItem';

let itemInfoDatas = require('json!../data/movieData.json');
/**
 * 对来源数据进行二次封装
 */
itemInfoDatas = ((itemInfoDatasAtrr) => {
	for (let i = 0, j = itemInfoDatasAtrr.length; i < j; i++) {
		let singleItemInfoData = itemInfoDatasAtrr[i];

        singleItemInfoData.title = singleItemInfoData.movieName;
		itemInfoDatasAtrr[i] = singleItemInfoData;
	}

	return itemInfoDatasAtrr;

})(itemInfoDatas);
console.log(itemInfoDatas);
/**
 * 列表信息
 */
class ItemInfo extends React.Component{
    render(){
        let itemFigur =[];
            itemInfoDatas.forEach((value,index)=>{
                itemFigur.push(<SingleItem data={value} key={index}/>);   
            });
        return(
            <section>
                <HeaderTitle headerText={this.props.headerText} headerUrl={this.props.headerUrl}/>
                <div className="section-content">
                    <ul className="row items">
                        {itemFigur}
                        {/* <SingleItem data={this.props.data}/> */}
                    </ul>
                </div>
            </section>
        )
    }
}

export default ItemInfo;