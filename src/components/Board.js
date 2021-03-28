import React from 'react';
import List from './List'
import Detail from './Detail'
import axios from 'axios';

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
            'http://localhost:9999/page/'+ value
        ).then(response => {
            data = response.data;
            this.setState({
                page : data,
            });
        });
        

    }
    render(){
        return (
            <div className="board">
                <List onClick={ (i) => this.handleClick(i)}/>
                <Detail page={this.state.page}/>
            </div>
        );
    }
}

export default Board;