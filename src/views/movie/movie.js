import React,{PropTypes} from 'react';
import ItemInfo from '../../components/itemInfo';
import template from '../../components/common/template.js';
class MyMovie extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[]  //分销商列表数组
        }
    }

    render(){
        return(
            <div>
                 <ItemInfo headerText="影院热映" headerUrl="javascript:;" star="4" rate="8.0" starLength="8" starStyle="small" /> 
            </div>
    )}

    // componentDidMount(){
    //     $.ajax({
    //          type: "GET",
    //          url: "https://api.douban.com/v2/book/1220562",
    //          data: {},
    //          dataType: "json",
    //          success: function(data){
    //             alert(data);
    //         }
    //      });
        
    // }
}
// export default template({
//     id: 'movieIndex',  //应用关联使用的redux
//     component: MyMovie, //接收数据的组件入口
//     url: '/movie/in_theaters'
// });

export default MyMovie;