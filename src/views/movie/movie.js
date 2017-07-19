import React,{PropTypes} from 'react';
import ItemInfo from '../../components/itemInfo';
import template from '../../components/common/template.js';
class MyMovie extends React.Component{
    static propTypes = {
        movieIndex:PropTypes.object.isRequired
    }

    static childContextTypes = {
    }

    constructor(props,context) {
        super(props,context);
        this.state = {
            data:[],  //分销商列表数组
            shouldUpdata:true //当获取数据后才能进行加载
        }
    }

    render(){
        return(
            <div>
                 <ItemInfo headerText="影院热映" headerUrl="javascript:;" star="4" rate="8.0" starLength="8" starStyle="small" /> 
            </div>
    )}

    componentDidMount(){
        
    }
}
export default template({
    id: 'movieIndex',  //应用关联使用的redux
    component: MyMovie, //接收数据的组件入口
    url: '/movie/in