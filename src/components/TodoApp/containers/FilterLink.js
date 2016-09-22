/**
 * Todo Filter Link
 */

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => {
	return ({
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.Filter))
		}
	})
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

export default FilterLink
