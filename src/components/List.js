import React from 'react';
import { Search } from './Search';

import Title from './Titles'

class List extends React.Component{

    render(){
        return(
            <div className="list">
                <Search />
                <Title onClick={this.props.onClick}/>
            </div>
        );
    }
}

export default List;