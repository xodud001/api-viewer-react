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
    
    render(){
        let path = this.props.page.params.filter(param => param.parameterType === 0);
        let query = this.props.page.params.filter(param => param.parameterType === 1);
        let form = this.props.page.params.filter(param => param.parameterType === 2);
        let body = this.props.page.params.filter(param => param.parameterType === 3);
        let header = this.props.page.params.filter(param => param.parameterType === 4);
        
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
                            {path.length > 0 && <ParamWrapper params={path} type={0}/>}
                            {query.length > 0 && <ParamWrapper params={query} type={1}/>}
                            {form.length > 0 && <ParamWrapper params={form} type={2}/>}
                            {body.length > 0 && <ParamWrapper params={body} type={3}/>}
                            {header.length > 0 && <ParamWrapper params={header} type={4}/>}
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