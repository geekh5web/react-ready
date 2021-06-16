import React, { Component, Fragment } from 'react'
import Counter from './Counter'
import Practice2And3 from './Practice2_3'

class App extends Component{
/*   constructor(props){
    super(props)
  } */
  render(){
    return(
      <Fragment>
        <Counter></Counter>
        <Practice2And3></Practice2And3>
      </Fragment>
    )
  }
}


export default App;
