import React from 'react';
import { Search } from './Search';

import Title from './Titles'

class List extends React.Component{

    render(){
        return(
            <div class ="list">
                <Search />
                <Title />
            </div>
        );
    }
}

export default List;