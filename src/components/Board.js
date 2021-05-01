import React from 'react';
import List from './List'
import Detail from './Detail'
import axios from 'axios';
import {createURL} from './Server'

class Board extends React.Component{
    

    constructor(props){
        super(props);

        this.state ={
            page : null,
        };
    }

    async handleClick(value){
        let data = null;
        axios.get(
            createURL(`/page/`) + value
        ).then(response => {
            data = response.data;
            this.setState({
                page : data,
            });
        });
        

    }

    changeData(data){
        this.setState({
            page : data,
        });
    }

    render(){
        return (
            <div className="board">
                <List 
                    onClick={ (i) => this.handleClick(i)}
                    />
                <Detail 
                    page={this.state.page}
                    changeData={ (data) => this.changeData(data)}
                />
            </div>
        );
    }
}

export default Board;