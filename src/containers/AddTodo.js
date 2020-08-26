import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo';
import {addTodo} from '../actions/addTodo';

const mapStateToProps = (state, ownProps)=>{
    return {
        inputRef: null
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        onSubmit: (e, inputRef)=>{
            e.preventDefault()
            if(inputRef.value.trim()){
                dispatch(addTodo(inputRef.value))
                inputRef.value = ''
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)