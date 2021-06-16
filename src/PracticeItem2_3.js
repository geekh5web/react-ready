import React,{ Component, Fragment } from 'react';

class PracticeItem extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <Fragment>
        <p>{this.props.content}</p>
      </Fragment>
    )
  }
}

export default PracticeItem;