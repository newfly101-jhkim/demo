import TodoListItem from "./TodoListItem";
import './TodoListItem.scss';
import React from 'react';

const TodoList = ({todos}) => {
    console.log(todos)
    return (
      <div className="TodoList">
          {/*.map() 에서 오류 나는 거는 비동기로 들어와서 표기가 안되는거*/}
          {todos && todos.map(todo => (
              <TodoListItem todo={todo} key={todo.id} />
              ))}
      </div>
    );
};

export default TodoList;
