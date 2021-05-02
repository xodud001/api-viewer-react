import { render } from '@testing-library/react';
import React from 'react';
import { Search } from './Search';

import Title from './Titles'

function Create(props){
    return(
        <div id="create">
            <button onClick={props.createTitle} >New <i class="fa fa-plus"></i></button>
            
        </div>
    );
        

}

class List extends React.Component{

    render(){
        return(
            <div className="list">
                <Search />
                <Title
                    onClick={this.props.onClick}
                    titles={this.props.titles}
                    isNewpage = {this.props.isNewpage}
                    setNewPage = {this.props.setNewPage}
                    removeTitle = {this.props.removeTitle}
                />
                <Create createTitle={this.props.createTitle}/>
            </div>
        );
    }
}



export default List;