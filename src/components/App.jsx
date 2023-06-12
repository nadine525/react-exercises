import React, {Component} from "react";
// import Counter from './Counter';
// import Dropdown from './Dropdown';
// import ColorPicker from "./ColorPicker";

import { nanoid } from 'nanoid';
import initialTodos from './todos.json';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import Filter from './Filter';

// import Form from "./Form";



// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];


class App extends Component {
  state = {
    todos: [],
    filter: '',
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
  }

  addTodo = text => {
    console.log(text);

    const todo = {
      id: nanoid(),
      text,
      completed: false,
    }

        this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  }

  deleteTodo = todoId => {
    this.setState(prevState => ({ todos: prevState.todos.filter(todo => todo.id !== todoId) }));
  };

   toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();
    

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { todos, filter } = this.state;

    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0,);

    const visibleTodos = this.getVisibleTodos();
    
    return (
    
      <>
      {/* <Counter initialValue={10} /> */}
      {/* <Dropdown /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}

        <div> 
          <p>Загальна кількість: {totalTodoCount}</p>
          <p>Кількість виконаних: {completedTodosCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted}/>
        
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
    </>
    )
  }
  
}

// export const App = () => {
//   return (
//     <>
//     {/* <Counter initialValue={10} /> */}
//     {/* <Dropdown /> */}
//       {/* <ColorPicker options={colorPickerOptions} /> */}
//       <TodoList />
//     </>

//   );
// };


export default App;