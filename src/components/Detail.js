import React from 'react'
import Page from './Page'

class Detail extends React.Component{
    renderMain(){
        if(this.props.page){
            return(
                <Page 
                    page={this.props.page}
                    changeData={this.props.changeData}
                    savePage={this.props.savePage}
                />
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