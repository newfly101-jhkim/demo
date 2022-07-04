import React, {useCallback, useRef} from 'react';
import { useState } from "react";
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



const App = () => {
    // useState(createBulkTodos) => 다수의 데이터를 function으로 생성
    // createBulkTodos() => re-render될때마다 호출 / createBulkTodos => 처음으로 렌더링 될 때만 호출
    const [todos, setTodos] = useState(createBulkTodos);

    const onRemove = useCallback( id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }, []);

    const onToggle = useCallback( id => {
        setTodos(todos =>
            todos && todos.map(todo =>
                todo.id === id ? {...todo, checked: !todo.checked} : todo
            ),
        );
    }, []);

    console.log("todos :",todos);

    const nextId = useRef(4);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        };
        setTodos(todos => todos.concat(todo));
        nextId.current += 1;
    }, [],
    );

    return <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>;
};

export default App;

