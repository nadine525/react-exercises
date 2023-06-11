import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className="TodoList__item">
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className="TodoList__text">{text}</p>
        <button
          type="button"
          className="TodoList__btn"
          onClick={() => onDeleteTodo(id)}
        >
          Видалити
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
