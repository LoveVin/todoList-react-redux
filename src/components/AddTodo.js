import React from 'react';

const AddTodo = ({ inputRef, onSubmit })=>{
    return (
        <form onSubmit={(e) => onSubmit(e,inputRef)}>
            <input ref={node => inputRef = node}/>
            <button type="submit">添加</button>
        </form>
    )
}

export default AddTodo