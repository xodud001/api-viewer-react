
import React, { useState, useEffect } from 'react';
import ParamWrapper from './ParamWrapper'

import { Content } from './Content'
import $ from "jquery";


const DropDownTypes = (props) => {
    useEffect(()=>{
        $('.detail .page .middle .type .dropdown-content button').click(function(){
            $('.detail .page .middle .type').removeClass('toggle');
        });
    });
    return(
        <div className="dropdown-content">
            <ul>
                <li>
                    <div class="circle blue"></div>
                    <button onClick={props.changeRestApiType} value="GET" >GET</button>
                </li>
                <li>
                    <div class="circle orange"></div>
                    <button onClick={props.changeRestApiType} value="POST" >POST</button>
                </li>
                <li>
                    <div class="circle navy"></div>
                    <button onClick={props.changeRestApiType} value="DELETE" >DELETE</button>
                </li>
                <li>
                    <div class="circle red"></div>
                    <button onClick={props.changeRestApiType} value="PATCH" >PATCH</button>
                </li>
            </ul>
        </div>
    );
}

const DropDownParam = (props) => {
    useEffect(()=>{
        $('.detail .page .bottom .wrapper .dropdown-param button').click(function(){
            $('.detail .page .bottom .wrapper .add-param-wrapper').removeClass('toggle');
        });
    });
    return(
        <div className="dropdown-param">
            <ul>
                <li>
                    <button 
                        onClick={props.addParam} 
                        value="Path Parameters">
                        Path Parameters
                    </button>
                </li>
                <li>
                    <button 
                        onClick={props.addParam}
                        value="Query Parameters">
                        Query Parameters
                    </button>
                </li>
                <li>
                    <button
                        onClick={props.addParam}
                        value="Form Data Parameters">
                        Form Data Parameters
                    </button>
                </li>
                <li>
                    <button
                        onClick={props.addParam}
                        value="Body Parameters">
                        Body Parameters
                    </button>
                </li>
                <li>
                    <button
                        onClick={props.addParam}
                        value="Headers">
                        Headers
                    </button>
                </li>
            </ul>
        </div>
    );
}

const Type = (props) => {
    
    const type = props.value.toLowerCase();
    return(
        <div className={props.class}>
            <button 
                class={["dropbtn", type].join(" ")} 
                onClick={() => {$('.detail .page .middle .type').toggleClass('toggle');}}>
                {props.value}
            </button>
            
            <DropDownTypes changeRestApiType={props.changeRestApiType}/>
        </div>
    );
}


class Page extends React.Component{

    render(){
        let path = this.props.page.parameters.filter(param => param.parameterType.paramId === 1);
        let query = this.props.page.parameters.filter(param => param.parameterType.paramId === 2);
        let form = this.props.page.parameters.filter(param => param.parameterType.paramId === 3);
        let body = this.props.page.parameters.filter(param => param.parameterType.paramId === 4);
        let header = this.props.page.parameters.filter(param => param.parameterType.paramId === 5);
        
        if(this.props.page){
            return(
                <div className="page">
                    <section className="top">
                        <Content 
                            class={"title"}
                            page={ this.props.page }
                            value={this.props.page.title}
                            onChange={this.props.changeData}
                        />

                        <Content 
                            class={"description"}
                            page={ this.props.page }
                            value={this.props.page.description}
                            onChange={this.props.changeData}
                        />
                    </section>
                    <section className="middle">
                        <Type class={"type"} value={this.props.page.crudType.type} changeRestApiType={this.props.changeRestApiType}/>
                        <Content 
                            class={"url"} 
                            page={ this.props.page }
                            value={this.props.page.url}
                            onChange={this.props.changeData}
                        />
                    </section>
                    <section className="bottom">
                        <div className="wrapper">
                            {path.length > 0 && <ParamWrapper params={path} page={ this.props.page } changeData={this.props.changeData} removeParam={this.props.removeParam} changeDataType={this.props.changeDataType} />}
                            {query.length > 0 && <ParamWrapper params={query} page={ this.props.page } changeData={this.props.changeData} removeParam={this.props.removeParam} changeDataType={this.props.changeDataType} />}
                            {form.length > 0 && <ParamWrapper params={form} page={ this.props.page } changeData={this.props.changeData} removeParam={this.props.removeParam} changeDataType={this.props.changeDataType} />}
                            {body.length > 0 && <ParamWrapper params={body} page={ this.props.page } changeData={this.props.changeData} removeParam={this.props.removeParam} changeDataType={this.props.changeDataType} />}
                            {header.length > 0 && <ParamWrapper params={header} page={ this.props.page } changeData={this.props.changeData} removeParam={this.props.removeParam} changeDataType={this.props.changeDataType} />}

                            <div className="add-param-wrapper">
                                <button 
                                    className="add-param-btn"
                                    onClick={() => {$('.detail .page .bottom .wrapper .add-param-wrapper').toggleClass('toggle');}}>
                                    Add Parameter
                                </button>
                                <DropDownParam addParam={this.props.addParam}/>
                            </div>

                        </div>
                    </section>

                    <section className="save">
                        <div>
                            <button id="save" onClick={this.props.savePage}>SAVE</button>
                        </div>
                    </section>
                </div>
            );
        }else{
            return(
                <div>실패!!</div>
            );
        }
    }
}

export default Page;