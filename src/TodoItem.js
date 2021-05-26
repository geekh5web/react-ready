import React, { Component } from 'react'
class TodoItem extends Component{
constructor(props){
  super(props);
  this.handleItemClick=this.handleItemClick.bind(this)
}
handleItemClick(){
  const {deleteFunction,index}=this.props;
  deleteFunction(index);
  // this.props.deleteFunction(this.props.index)
}
  render(){
    //子组件通过this.props的属性接收从父组件传递过来的值
    //子组件想要和父组件通信，他要调用父组件传递过来的方法，方法的作用域需要变更
    const {content}=this.props;//es6写法，等价于const content=this.props.content
    return(
      <li onClick={this.handleItemClick}>{content}</li>
    )
  }
}


export default TodoItem;