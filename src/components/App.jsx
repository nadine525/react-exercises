import React, {Component} from "react";
// import Counter from './Counter';
// import Dropdown from './Dropdown';
// import ColorPicker from "./ColorPicker";

import initialTodos from './todos.json';
import TodoList from './TodoList';



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
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({ todos: prevState.todos.filter(todo => todo.id !== todoId) }));
  };


  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce((total, todo) => todo.completed ? total + 1 : total)
    return (
    
        <>
      {/* <Counter initialValue={10} /> */}
      {/* <Dropdown /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}

        <div> 
          <p>Загальна кількість: {totalTodoCount}</p>
          <p>Кількість виконаних: {completedTodosCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={ this.deleteTodo} />
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