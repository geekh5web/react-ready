import React,{Component,Fragment} from "react";
class TodoList extends Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:'初始值',
      list:[]
    }
  }
  handleInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  render(){
    return(
      <Fragment>
        <input  
          value={this.state.inputValue} 
          onChange={this.handleInputChange.bind(this)}
          />
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Fragment> 
    )
  }
}
export default TodoList;