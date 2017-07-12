import React from 'react';
import ItemInfo from '../components/itemInfo';

class MyMovie extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                 <ItemInfo headerText="影院热映" headerUrl="javascript:;" star="4" rate="8.0" starLength="8" starStyle="small"/> 
            </div>
    )}
}

export default MyMovie;
