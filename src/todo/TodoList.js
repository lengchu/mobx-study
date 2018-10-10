import { observable, computed, action } from 'mobx'
import TodoView, { Todo } from './Todo'
import { observer } from 'mobx-react'
import React from 'react'
import scssStyles from './style.module.scss'
import { Input, Button, ToastContainer, toast } from 'mdbreact'

export class TodoList {
    @observable todos = [
        new Todo('mobx', false), 
        new Todo('redux', true)
    ]

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }

    @action
    addTodo(todo) {
        this.todos.push(todo)
    }
}

@observer
class TodoListView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newTodo: ''
        }
    }

    render() {
      return (
        <div className={scssStyles.todoList}>
          <ul>
              {this.props.todoList.todos.map(todo => (
                  <TodoView todo={todo} key={todo.id} />
              ))}
          </ul>
          Tasks left: {this.props.todoList.unfinishedTodoCount}
          <Input value={this.state.newTodo} label="Add a Todo" getValue={(value) => this.setState({newTodo: value})} />
          <Button onClick={this.addTodo}>Save</Button>
          <ToastContainer
            hideProgressBar={true}
            newestOnTop={true}
            autoClose={3000}
          />
        </div>
      )
    }

    addTodo = () => {
        if(this.state.newTodo === '')
            toast.error('todo can not be empty')
        else if(this.props.todoList.todos.map(todo => todo.title).includes(this.state.newTodo))
            toast.error('todo exists')
        else {
            this.props.todoList.addTodo(new Todo(this.state.newTodo, false))
            this.setState({newTodo: ''})
            toast.success('add success')
        }
    }
}

export default TodoListView
