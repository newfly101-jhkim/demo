import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';
import React from 'react';

const TodoInsert = () => {
    return (
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요"/>
            <button type="submit"> <MdAdd /> </button>
        </form>
    );
};

export default TodoInsert;