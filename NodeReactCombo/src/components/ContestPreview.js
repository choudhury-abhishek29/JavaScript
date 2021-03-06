import React, {Component} from 'react';

class ContestPreview extends Component
{
  handleClick=()=>
  {
    console.log(this.props.contestName);
    this.props.onClick(this.props.id);
  }

  render()
  {
    return(
      <div className="ContestPreview" onClick={this.handleClick}>
        <div className="category-name">
          {this.props.categoryName}
        </div>
        <div className="contest-name">
          {this.props.contestName}
        </div>
      </div>
    );
  }

}

export default ContestPreview;
