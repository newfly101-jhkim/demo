import React, {useCallback, useRef} from 'react';
import { useState } from "react";
import TodoTemplate from "./Components/TodoTemplate";
import TodoInsert from "./Components/TodoInsert";
import TodoList from "./Components/TodoList";


const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트의 기초 알아보기',
            checked: true
        },
        {
            id: 2,
            text: '컴포넌트 스타일링 해보기',
            checked: true
        },
        {
            id: 3,
            text: '일정 관리 앱 만들어 보기',
            checked: false
        }
    ]);

    console.log("todos :",todos);

    const nextId = useRef(4);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    }, [todos],
    );

    return <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos}/>
    </TodoTemplate>;
};

export default App;

