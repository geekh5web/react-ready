import React, { Component, Fragment } from 'react'
import TodoList from './TodoList'

class App extends Component{
/*   constructor(props){
    super(props)
  } */
  render(){
    return(
      <Fragment>
        <TodoList></TodoList>
      </Fragment>
    )
  }
}


export default App;
