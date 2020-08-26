import { connect } from 'react-redux';
import VisibleTodoList from '../components/VisibleTodoList';
import {SHOW_ALL, SHOW_COMPLETE, SHOW_UNCOMPLETE} from '../constants/filterOptions';
import toggleTodo from '../actions/toggleTodo';
import fetchTodoList from '../actions/fetchTodoList';

const getVisibleTodoList = (todos, filter)=>{
    switch (filter) {
        case SHOW_ALL:
            return todos
        case SHOW_COMPLETE:
            return todos.filter(todo => todo.isComplete)
        case SHOW_UNCOMPLETE:
            return todos.filter(todo => !todo.isComplete)
        default:
            throw new Error('unknow filter' + filter)
    }
}

const mapStateToProps = (state, ownProps)=>{
    return {
        todoList: getVisibleTodoList(state.todoList, state.filter)
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        fetchTodoList: ()=>{
            dispatch(fetchTodoList())
        },
        onClick: (index)=>{
            dispatch(toggleTodo(index))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleTodoList)
