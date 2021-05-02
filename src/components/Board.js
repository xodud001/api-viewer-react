import React from 'react';
import List from './List'
import Detail from './Detail'
import axios from 'axios';
import {createURL} from './Server'
import { v4 as uuidv4 } from 'uuid';
import $ from "jquery";

class Board extends React.Component{
    

    constructor(props){
        super(props);

        this.state ={
            page : null,
            titles : null,
            createNewPage: false,
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

    setNewPage(value){
        this.setState({
            createNewPage : value,
        });
    }

    async handleClick(e){
        let id = e.target.getAttribute('data-tag');
        console.log(id) 
        let data = null;
        axios.get(
            createURL(`/page/`) + id
        ).then(response => {
            data = response.data;
            this.setState({
                page : data,
            });
        });
        
    }
    removeTitle(e){
        let id = e.target.getAttribute('data-tag');

        axios({
            method: 'delete',
            url: createURL(`/page/`)+id
        }).then(console.log(createURL(`/page/`)+id));

        let titles = this.state.titles;
        const title = titles.find( function(title){
            console.log(`${title.pageId} === ${id}`)
            return title.pageId === id;
        });
        const index = titles.indexOf(title);
        titles.splice(index, 1);
        
        this.setState({
            titles : titles,
        });

        axios.get(
            createURL(`/page/`) + titles[0].pageId
        ).then(response => {
            let data = response.data;
            this.setState({
                page : data,
            });
        });
        $('.board .list ul li:first-child').addClass("active").siblings().removeClass("active");
        
    }
    createTitle(){
        var titles = this.state.titles;
        var defaultPage = {
            pageId : uuidv4(),
            title : "Init page",
            description : "This is a init page",
            url : "Enter url",
            crudType : {
                crudId : 1,
                type : "GET"
            },
            parameters : [
                {
                    reqParamId : uuidv4(),
                    name : "id",
                    description : "Init id",
                     dataType: {
                        dataId : 1,
                        type : "String"
                    },
                    parameterType : {
                        paramId : 1,
                        type : "Path Parameters"
                    }
                }
            ]
        }
        axios({
            method: 'post',
            url: createURL(`/page`),
            data: defaultPage
        });
        titles.push({
            pageId : defaultPage.pageId,
            title: defaultPage.title,
        });
        this.setState({
            titles : titles,
            page: defaultPage,
            createNewPage : true,
        });
        
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
                    isNewpage ={ this.state.createNewPage }
                    setNewPage = {(i) => this.setNewPage(i)}
                    removeTitle = {(i) => this.removeTitle(i)}
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