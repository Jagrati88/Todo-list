  import React ,{ Component } from 'react';
  import Todos from './todos'
  import AddTodos from './addTodos'

  class App extends Component{
    state={
      'todos':[
          {'name':'Learn React', 'id': 0},
          {'name':'Come on time', 'id': 1},
          {'name':'Complete the task', 'id': 2}
          ]
        }

        addTodos = (newTodo) => {
          newTodo.id = this.state.todos[this.state.todos.length-1].id+1
          let todos=[...this.state.todos,newTodo]
          this.setState({
            todos
          })
        }

        deleteTodos = (id) => {
          let todos = this.state.todos.filter(todo => {
            return todo.id !== id;
          })
          this.setState({
            todos: todos
          })
        }
        
        render(){
          return (
            <div>
              <h1>To Do List</h1>
              <AddTodos addTodos = {this.addTodos}></AddTodos>
              <Todos deleteTodos = {this.deleteTodos} todos = {this.state.todos}></Todos>
              
              </div>
            
          )
        }
  }

  export default App;
