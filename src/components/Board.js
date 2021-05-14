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

    changeRestApiType(e){
        var newPage = this.state.page;
        console.log(e.target.value);
        switch(e.target.value){
            case "GET":
                newPage.crudType.crudId = 1;
                newPage.crudType.type = "GET";
                break;
            case "POST":
                newPage.crudType.crudId = 2;
                newPage.crudType.type = "POST";
                break;
            case "DELETE":
                newPage.crudType.crudId = 3;
                newPage.crudType.type = "DELETE";
                break;
            case "PATCH":
                newPage.crudType.crudId = 4;
                newPage.crudType.type = "PATCH";
                break;
            default:
                return;
        }
        this.setState({
            page : newPage,
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

    savePage(){
        var page = this.state.page;

        if(page.title.length <= 0){
            alert("문서의 제목을 입력하세요.");
            return;
        }
        if(page.description.length <= 0){
            alert("문서의 설명을 입력하세요.");
            return;
        }
        if(page.url.length <= 0){
            alert("문서의 URL을 입력하세요.");
            return;
        }
        for(let i = 0 ; i < page.parameters.length ; i++){
            let param = page.parameters[i];
            if(param.name.length <= 0 || param.description.length <= 0){
                alert("Paramter를 정확히 입력하세요.")
                return;
            }
        }

        axios({
            method: 'patch',
            url: createURL(`/page`),
            data: this.state.page,
        });
        let titles = this.state.titles;
        const title = titles.find( function(title){
            return title.pageId === page.pageId;
        });
        const index = titles.indexOf(title);
        title.title = this.state.page.title;
        titles[index] = title;
        
        this.setState({
            titles : titles,
        });
        alert("저장되었습니다.");
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

    addParam(e){
        var newData = {
            "reqParamId": uuidv4(),
            "name": "id",
            "description": "Init id",
            "dataType": {
                "dataId": 1,
                "type": "String"
            },
            "parameterType": {
                "paramId": null,
                "type": null
            }
        };
        var newPage = this.state.page;
        switch(e.target.value){
            case "Path Parameters":
                newData.parameterType.paramId = 1;
                newData.parameterType.type = "Path Parameters";
                break;
            case "Query Parameters":
                newData.parameterType.paramId = 2;
                newData.parameterType.type = "Query Parameters";
                break;
            case "Form Data Parameters":
                newData.parameterType.paramId = 3;
                newData.parameterType.type = "Form Data Parameters";
                break;
            case "Body Parameters":
                newData.parameterType.paramId = 4;
                newData.parameterType.type = "Body Parameters";
                break;
            case "Headers":
                newData.parameterType.paramId = 5;
                newData.parameterType.type = "Headers";
                break;
            default:
                return;
        }
        newPage.parameters.push(newData)
        this.setState({
            page : newPage,
        });
        console.log(newData);
    }

    removeParam(e){
        let id = e.target.getAttribute('data-tag');
        console.log(id);

        let newPage = this.state.page;
        let params = this.state.page.parameters;
        const param = params.find( function(param){
            return param.reqParamId === id;
        });
        const index = params.indexOf(param);
        params.splice(index, 1);
        newPage.parameters = params;
        this.setState({
            page : newPage,
        });
    }
    
    changeDataType(e){
        let newPage = this.state.page;
        let params = newPage.parameters;

        var result = e.target.value.split(" ");
        const param = params.find( function(param){
            return param.reqParamId === result[1];
        });
        const index = params.indexOf(param);

        switch(result[0]){
            case "string":
                param.dataType.dataId = 1;
                param.dataType.type = "string";
                break;
            case "number":
                param.dataType.dataId = 2;
                param.dataType.type = "number";
                break;
            case "integer":
                param.dataType.dataId = 3;
                param.dataType.type = "integer";
                break;
            case "boolean":
                param.dataType.dataId = 4;
                param.dataType.type = "boolean";
                break;
            case "array":
                param.dataType.dataId = 5;
                param.dataType.type = "array";
                break;
            case "object":
                param.dataType.dataId = 6;
                param.dataType.type = "object";
                break;
            default:
                return;
        }

        params[index] = param;
        newPage.parameters = params;
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
                    savePage={this.savePage.bind(this)}
                    changeRestApiType = {this.changeRestApiType.bind(this)}
                    addParam = {this.addParam.bind(this)}
                    removeParam ={this.removeParam.bind(this)}
                    changeDataType={this.changeDataType.bind(this)}
                />
            </div>
        );
    }
}

export default Board;