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
        let path = this.props.page.parameters.filter(param => param.parameterType.paramId === 1);
        let query = this.props.page.parameters.filter(param => param.parameterType.paramId === 2);
        let form = this.props.page.parameters.filter(param => param.parameterType.paramId === 3);
        let body = this.props.page.parameters.filter(param => param.parameterType.paramId === 4);
        let header = this.props.page.parameters.filter(param => param.parameterType.paramId === 5);
        
        if(this.props.page){
            return(
                <div className="page">
                    <section className="top">
                        <Content class={"title"} value={this.props.page.title}/>
                        <Content class={"description"} value={this.props.page.description}/>
                    </section>
                    <section className="middle">
                        <Type class={"type"} value={this.props.page.crudType.type}/>
                        <Content class={"url"} value={this.props.page.url}/>
                    </section>
                    <section className="bottom">
                        <div className="wrapper">
                            {path.length > 0 && <ParamWrapper params={path} />}
                            {query.length > 0 && <ParamWrapper params={query} />}
                            {form.length > 0 && <ParamWrapper params={form} />}
                            {body.length > 0 && <ParamWrapper params={body} />}
                            {header.length > 0 && <ParamWrapper params={header} />}
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