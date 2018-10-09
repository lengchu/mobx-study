import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css'
import '../node_modules/mdbreact/dist/css/mdb.css'
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoListView, { TodoList } from './todo/TodoList';

const store = new TodoList()
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TodoListView todoList={store} />, document.getElementById('root'))
registerServiceWorker();
