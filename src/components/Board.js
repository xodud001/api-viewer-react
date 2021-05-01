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
            titles : null,
        };
        axios.get(
            createURL(`/titles/`)
        ).then(response => {
            var data = response.data;
            this.setState({
                titles : data,
            });
        });
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

    createTitle(){
        var titles = this.state.titles;
        titles.push({
            "pageId" : "uuid",
            "title": "Rev init"
        });
        this.setState({
            titles : titles
        });
        console.log('Create')
    }

    changeData(e){
        var newPage = this.state.page;
        var params = this.state.page.parameters;
        var result = e.target.name.split(" ");
        

        switch(result[0]){
            case "title":
                newPage.title = e.target.value;
                break;
            case "description":
                if(result[1]){
                    for(let i = 0 ; i < params.length ; i++){
                        let param = params[i];
                        if(param.reqParamId === result[1]){
                            param.description = e.target.value
                            params[i] = param;
                            newPage.parameters = params;
                            break;
                        } 
                    }
                }
                else newPage.description = e.target.value;
                break;
            case "url":
                newPage.url = e.target.value;
                break;
            case "name":
                
                for(let i = 0 ; i < params.length ; i++){
                    let param = params[i];
                    if(param.reqParamId === result[1]){
                        param.name = e.target.value
                        params[i] = param;
                        newPage.parameters = params;
                        break;
                    } 
                }
                break;
            default:
                alert("none");
                break;
        }

        this.setState({
            page : newPage,
        });
    }

    render(){
        return (
            <div className="board">
                <List 
                    onClick={ (i) => this.handleClick(i)}
                    createTitle={ this.createTitle.bind(this)}
                    titles = {this.state.titles}
                />
                <Detail 
                    page={this.state.page}
                    changeData={ this.changeData.bind(this)}
                />
            </div>
        );
    }
}

export default Board;