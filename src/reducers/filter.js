import * as selectList from '../constants/filterOptions'
import {SET_FILTER} from '../constants/actionTypes';

const filter = (state = selectList.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter
        default:
            return state
    }
}

export default filter