import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'

export class Todo {
    id = Math.random()
    @observable title = ''
    @observable finished = false

    constructor(title, finished) {
        this.title = title
        this.finished = finished
    }
}

@observer
class TodoView extends React.Component {

    render() {
      return (
        <li>
            <input type="checkbox" 
                   checked={this.props.todo.finished}
                   onChange={this.handleClick} />
            {this.props.todo.title}
        </li>
      )
    }

    @action
    handleClick = () => {
        const todo = this.props.todo
        todo.finished = !todo.finished
    }
}

export default TodoView
