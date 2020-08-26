import {ADD_TODO} from '../constants/actionTypes';

export const addTodo = (text)=>{
    return {
        type: ADD_TODO,
        text
    }
}