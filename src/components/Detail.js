import React from 'react'
import Page from './Page'

class Detail extends React.Component{
    renderMain(){
        return(
            <div className="detail-main">
                <span>
                    {this.props.detail.title}
                </span>
                <span>
                    {this.props.detail.desc}
                </span>
            </div>
        );
    }

    render(){
        return(
            <div className="detail">
                {this.renderMain()}
                <Page />
            </div>
        );
    }
}

export default Detail;