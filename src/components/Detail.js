import React from 'react'
import Page from './Page'

class Detail extends React.Component{
    renderMain(){
        if(this.props.page){
            return(
                <Page page={this.props.page} />
            ); 
        }
        
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