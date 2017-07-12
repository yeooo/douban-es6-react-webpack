import React from 'react';
require('../styles/components/headerTitle.scss');

/**
 * 头部标题
 */
class ItemHeader extends React.Component{
    render(){
        return(
            <header className="header-title">
                <h2>{this.props.headerText}</h2>
                <a href={this.props.headerUrl}>
                    {
                        this.props.headerUrl ? '更多' : {}
                    }
                </a>
            </header>
        )
    }
}

export default ItemHeader;