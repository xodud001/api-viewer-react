import React from 'react';
import List from './List'
import Detail from './Detail'

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            detail : {
                title : "This is a title!",
                desc : "This is a desc!",
            },
        };
    }

    handleClick(i){

        this.setState({
            detail : {
                title: "This is a " + i + "title!",
                desc : "This is a " + i + "desc!",
            }
        });
    }
    render(){
        return (
            <div className="board">
                <List onClick={ (i) => this.handleClick(i)}/>
                <Detail detail={this.state.detail}/>
            </div>
        );
    }
}

export default Board;