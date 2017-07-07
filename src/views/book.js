import React from 'react';

class MyBook extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="page">
                <header>
                    MyBook
                </header>
            </div>
        )
    }   
}

export default MyBook;