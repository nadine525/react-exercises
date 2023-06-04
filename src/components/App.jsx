import React, {Component} from "react";
// import Counter from './Counter';
// import Dropdown from './Dropdown';
// import ColorPicker from "./ColorPicker";
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
    todos: [],
  };


  render() {
    const { todos } = this.state;
    return (
    
        <>
      {/* <Counter initialValue={10} /> */}
      {/* <Dropdown /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
        <TodoList todos={todos} />
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