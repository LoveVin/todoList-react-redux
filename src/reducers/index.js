import {combineReducers} from 'redux';
import filter from './filter';
import todoList from './todoList';

const reducer = combineReducers({
    filter,
    todoList
})

export default reducer