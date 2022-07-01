import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';
import React, {useCallback, useState} from 'react';

const TodoInsert = () => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
        console.log(e.target.value); // onChange() 값 console에서 확인
    }, []);

    return (
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요"
            value={value}
            onChange={onChange}
            />

            <button type="submit"> <MdAdd /> </button>
        </form>
    );
};

export default TodoInsert;