import { param } from 'jquery';
import React from 'react';
import ParamWrapper from './ParamWrapper'

const Content = (props) => {
    return(
        <div className={props.class}>
            {props.value}
        </div>
    );
}

const Type = (props) => {
    const type = props.value.toLowerCase();
    return(
        <div className={[props.class, type].join(" ")}>
            {props.value}
        </div>
    );
}


class Page extends React.Component{
    
    constructor(props){
        super(props);
        this.params = Array.from(Array(5)).forEach(arr => arr = [{}]);
    }

    sortParams(params){
        for(let i = 0 ; i < params.length ; i++){
            const value = params[i];
            console.log(value);
            this.params[value.parameterType].push(value);
        }
    }

    render(){
        this.params = Array.from(Array(5)).forEach(arr => arr = [{}]);
        this.sortParams(this.props.page.params);

        if(this.props.page){
            return(
                <div className="page">
                    <section className="top">
                        <Content class={"title"} value={this.props.page.title}/>
                        <Content class={"description"} value={this.props.page.description}/>
                    </section>
                    <section className="middle">
                        <Type class={"type"} value={this.props.page.crudType}/>
                        <Content class={"url"} value={this.props.page.url}/>
                    </section>
                    <section className="bottom">
                        <div className="wrapper">
                            {
                                this.params.forEach(params => (
                                    params.length > 0 ? <ParamWrapper params = {params}/> : ""
                                ))
                            }
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