import { observable, computed } from 'mobx'
import TodoView, { Todo } from './Todo'
import { observer } from 'mobx-react'
import React from 'react'
import scssStyles from './style.module.scss'
import { Button } from 'mdbreact'

export class TodoList {
    @observable todos = [
        new Todo('mobx', false), 
        new Todo('redux', true)
    ]

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }
}

@observer
class TodoListView extends React.Component {

    render() {
      return (
        <div className={scssStyles.todoList}>
          <ul>
              {this.props.todoList.todos.map(todo => (
                  <TodoView todo={todo} key={todo.id} />
              ))}
          </ul>
          Tasks left: {this.props.todoList.unfinishedTodoCount}
          <Button>Test</Button>
        </div>
      )
    }
}

export default TodoListView
