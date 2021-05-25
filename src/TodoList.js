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
  handleKeyUp(e){
    if(e.keyCode===13){
      const list=[...this.state.list,this.state.inputValue];
      this.setState({
        list,
        inputValue:'',
      })
    }
  }
  handleItemClick(index){
    const list=[...this.state.list];
    list.splice(index,1)
    this.setState({
      list
    })
  }
  render(){
    return(
      <Fragment>
        <input  
          value={this.state.inputValue} 
          onChange={this.handleInputChange.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
          />
        <ul>
          {this.state.list.map((item,idx)=>{
            return <li key={idx} onClick={this.handleItemClick.bind(this,idx)}>{item}</li>
          })}
        </ul>
      </Fragment> 
    )
  }
}
export default TodoList;