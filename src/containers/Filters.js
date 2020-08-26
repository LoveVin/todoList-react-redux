import { connect } from 'react-redux'
import Filters from '../components/Filters';
import fetchFilterOptions from '../constants/fetchFilterOptions';
import setFilter from '../actions/setFilter';

const mapStateToProps = (state, ownProps)=>{
    return {
        filterList: fetchFilterOptions()
    }
}
const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        onClick: (filter)=>{
            dispatch(setFilter(filter))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters)