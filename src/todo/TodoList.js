import { observable, computed } from 'mobx'
import TodoView, { Todo } from './Todo'
import { observer } from 'mobx-react'
import React from 'react'

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
export default class TodoListView extends React.Component {

    render() {
      return (
        <div>
          <ul>
              {this.props.todoList.todos.map(todo => (
                  <TodoView todo={todo} key={todo.id} />
              ))}
          </ul>
          Tasks left: {this.props.todoList.unfinishedTodoCount}
        </div>
      )
    }
}
