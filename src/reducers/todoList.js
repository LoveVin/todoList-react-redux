import {ADD_TODO, FETCH_TODOLIST, TOGGLE_TODO} from '../constants/actionTypes';

const todoList = (state = [], action)=>{
    switch (action.type) {
        case FETCH_TODOLIST:
            return action.todos ? action.todos : []
        case ADD_TODO:
            return [...state, { text: action.text, isComplete: false }]
        case TOGGLE_TODO:
            return state.map((todo, index)=>(index === action.index ? {...todo, isComplete: !todo.isComplete} : todo)
            )
        default:
            return state
    }
}

export default todoList