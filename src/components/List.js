import React from 'react';
import { Item } from './Item';
import { Search } from './Search';

class List extends React.Component{
    renderItem(i){
        return(
            <Item 
                value={i}
                onClick={ () => this.props.onClick(i)}
            />
        );
    }

    render(){
        return(
            <div class ="list">
                <Search />
                <ul>
                    {this.renderItem(1)}
                    {this.renderItem(2)}
                    {this.renderItem(3)}
                </ul>
            </div>
        );
    }
}

export default List;