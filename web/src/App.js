import React, {useCallback, useReducer, useRef} from 'react';
// import { useState } from "react";
import TodoTemplate from "./Components/TodoTemplate";
import TodoInsert from "./Components/TodoInsert";
import TodoList from "./Components/TodoList";

function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
        array.push({
            id: i,
            checked: false,
            text: `할 일 ${i}`,
        });
    }
    return array;
}

function todoReducer(todos, action) {
    switch (action.type) {
        case 'INSERT' :
            return todos.concat(action.todo);
        case 'REMOVE' :
            return todos.filter(todo => todo.id !== action.id);
        case 'TOGGLE' :
            return todos && todos.map(todo => todo.id === action.id ? {...todo, checked : !todo.checked} : todo,);
        default:
            return todos;
    }
}



const App = () => {
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);


    const onInsert = useCallback(text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false
            };
            dispatch({type:'INSERT', todo});
            nextId.current += 1;
        }, [],
    );

    const onRemove = useCallback( id => {
        dispatch({type: 'REMOVE', id});
    }, []);

    const onToggle = useCallback( id => {
        dispatch({type: 'TOGGLE', id});
    }, []);

    console.log("todos :",todos);

    const nextId = useRef(4);


    return <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>;
};

export default App;

