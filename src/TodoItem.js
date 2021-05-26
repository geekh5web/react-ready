import React, { Component } from 'react'
class TodoItem extends Component{
constructor(props){
  super(props);
  this.handleItemClick=this.handleItemClick.bind(this)
}
handleItemClick(){
  console.log('handleItemClick')
}
  render(){
    //子组件通过this.props的属性接收从父组件传递过来的值
    const {content}=this.props;//es6写法，等价于const content=this.props.content
    return(
      <li onClick={this.handleItemClick}>{content}</li>
    )
  }
}


export default TodoItem;