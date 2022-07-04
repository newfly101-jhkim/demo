import './TodoTemplate.scss';
import cn from 'classnames';
import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";

const TodoListItem = ({todo, onRemove, onToggle, style}) => {
    const {id, text, checked} = todo;
    console.log(checked);
    return (
        <div className="TodoListItem" style={style}>
            <div className={cn("checkbox", {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);