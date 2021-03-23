import React from 'react'

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
            </div>
        );
    }
}

export default Detail;