import React,{Component,Fragment} from "react";
import './style.css'
class TodoList extends Component{
  constructor(props){
    super(props);
    //函数用了bind之后每次执行都会新建一个 开销较大，性能优化.传了参数的bind无法优化
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleKeyUp=this.handleKeyUp.bind(this);
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
  getListItems(){//优化html结构
    return this.state.list.map((item,idx)=>{
      return (<li
                 key={idx} 
                 onClick={this.handleItemClick.bind(this,idx)}
                 dangerouslySetInnerHTML={{__html:item}}
                 >
                 </li>)
    })
  }
  render(){
    return(
      <Fragment>
        {/* JSX的注释 */}
        <label htmlFor='myinput'>请输入内容:</label>
        <input
        id='myinput'
          className='input'
          value={this.state.inputValue} 
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
          />
        <ul>
          {this.getListItems()}
        </ul>
      </Fragment> 
    )
  }
}
export default TodoList;