import React, {useEffect} from 'react';

const VisibleTodoList = ({ todoList, fetchTodoList, onClick })=>{
    useEffect(()=>{
        fetchTodoList()
    },[])
    return todoList.length > 0 ? (
        <ul>
            {todoList.map((todo, index)=>(
                <li key={index} onClick={() => onClick(index)}
                style={{textDecoration: todo.isComplete ? 'line-through' : 'none'}}>{todo.text}</li>
            ))}
        </ul>
    ): (
        <div>加载中...</div>
    )
}

export default VisibleTodoList