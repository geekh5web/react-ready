import React,{ Component, Fragment } from 'react';
import PracticeItem from './PracticeItem2_3';

class Practice2And3 extends Component{
  constructor(props){
    super(props);
    this.handleBtnClick=this.handleBtnClick.bind(this)
    this.state={
      btnText:'点击，数字+2',
      num:1,
    }
  }
  handleBtnClick(){
    const num = this.state.num+2;
    this.setState({
      num
    })
  }
  render(){
    return(
      <Fragment>
        <button onClick={this.handleBtnClick}>{this.state.btnText}</button>
        <PracticeItem content={this.state.num}></PracticeItem>
      </Fragment>
    )
  }
}

export default Practice2And3;