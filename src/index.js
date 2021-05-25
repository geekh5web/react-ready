import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import TodoList from './TodoList.js'

//JSX语法
ReactDOM.render(<Fragment>
  {/* <App /> */}
  <TodoList></TodoList>
</Fragment>,document.getElementById('root'));
