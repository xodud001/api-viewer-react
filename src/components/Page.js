import React from 'react';
import Request from './Request'

const Content = (props) => {
    return(
        <div className={props.class}>
            {props.value}
        </div>
    );
}

const Type = (props) => {
    return(
        <div className={[props.class, "post"].join(" ")}>
            {props.value}
        </div>
    );
}

class Page extends React.Component{
    render(){
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
                            {this.props.page.params.map( param =>(
                                <Request param={param} />
                            ))}
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