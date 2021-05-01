
import React from 'react';
import ParamWrapper from './ParamWrapper'



const Content = (props) => {
    return(
        <input type="text" className={props.class} value={props.value} onChange={props.onChange} name={props.class}/>
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

    inputHandle(e){
        var page = this.props.page;

        switch(e.target.name){
            case "title":
                page.title = e.target.value;
                this.props.changeData(page);
                break;
            default:
                alert("none");
                break;
        }
    }

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
                            onChange={this.inputHandle.bind(this)}/>

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