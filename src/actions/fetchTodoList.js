import ajax from '../ajax';
import { FETCH_TODOLIST } from '../constants/actionTypes';

const fetchTodoList = ()=>{
    return (dispatch, getState)=>{
        ajax('./todos').then((todos)=>{
            dispatch({type: FETCH_TODOLIST, todos})
        })
    }
}

export default fetchTodoList