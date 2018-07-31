import React, {Component} from 'react';

class Contest extends Component
{
  
  render()
  {
    return(
      <div className="Contest">
        {this.props.categoryName}
        <br/>
        {this.props.contestName}
        <br/>
        {this.props.description}
        <div className="home-link link" onClick={this.props.contestListClick}>
            Contest List
        </div>                
      </div>
    );
  }

}

export default Contest;
