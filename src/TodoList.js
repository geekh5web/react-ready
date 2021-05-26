import React,{Fragment,Component} from 'react'
import TodoItem from './TodoItem'
require('./style.css');

class TodoList extends Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.handleKeyUp=this.handleKeyUp.bind(this);
    this.handleItemClick=this.handleItemClick.bind(this);//固定this指向，需要传递给子组件
    this.state={
      inputValue:'初始值',
      list:['1','2','3','4','5','6','7']
    }
  }
  handleChange(e){
    const value=e.target.value;
    this.setState({
      inputValue:value
    })
  }
  handleKeyUp(e){
    if(e.keyCode===13&&this.state.inputValue!==""){
      const list=[...this.state.list,this.state.inputValue];
      this.setState({
        list,
        inputValue:''
      })
    }
  }
  handleItemClick(idx){
    const list=[...this.state.list];
    list.splice(idx,1);
    this.setState({
      list:list
    })

  }
  getListItem(){
    return this.state.list.map((item,idx)=>{
      return <TodoItem content={item} key={idx} index={idx} deleteFunction={this.handleItemClick}/>
    })
  }
  render(){
    return (
      <Fragment>
        <label htmlFor="my-input">请输入内容：</label>
        <input 
          type="text" 
          id="my-input" 
          className="inputClass"
          value={this.state.inputValue}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          />
        <ul>
          {this.getListItem()}
        </ul>
      </Fragment>
    )
  }
}
export default TodoList;