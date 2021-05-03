
import React, { useState, useEffect } from 'react';
import ParamWrapper from './ParamWrapper'

import { Content } from './Content'
import $ from "jquery";


const DropDownTypes = (props) => {
    return(
        <div className="dropdown-content">
            <ul>
                <li>
                    <div class="circle blue"></div>
                    <button>GET</button>
                </li>
                <li>
                    <div class="circle orange"></div>
                    <button>POST</button>
                </li>
                <li>
                    <div class="circle navy"></div>
                    <button>DELETE</button>
                </li>
                <li>
                    <div class="circle red"></div>
                    <button>PATCH</button>
                </li>
            </ul>
        </div>
    );
    
}

const Type = (props) => {
    useEffect(()=>{
        $('.detail .page .middle .type .dropbtn').click(function(){
            $('.detail .page .middle .type').toggleClass('toggle');
        });
    });
    const type = props.value.toLowerCase();
    return(
        <div className={props.class}>
            <button class={["dropbtn", type].join(" ")}>{props.value}</button>
            
            <DropDownTypes />
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
                        <Type class={"type"} value={this.props.page.crudType.type}/>
                        <Content 
                            class={"url"} 
                            page={ this.props.page }
                            value={this.props.page.url}
                            onChange={this.props.changeData}
                        />
                    </section>
                    <section className="bottom">
                        <div className="wrapper">
                            {path.length > 0 && <ParamWrapper params={path} page={ this.props.page } changeData={this.props.changeData}/>}
                            {query.length > 0 && <ParamWrapper params={query} page={ this.props.page } changeData={this.props.changeData}/>}
                            {form.length > 0 && <ParamWrapper params={form} page={ this.props.page } changeData={this.props.changeData}/>}
                            {body.length > 0 && <ParamWrapper params={body} page={ this.props.page } changeData={this.props.changeData}/>}
                            {header.length > 0 && <ParamWrapper params={header} page={ this.props.page } changeData={this.props.changeData}/>}
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