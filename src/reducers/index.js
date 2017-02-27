import * as actions from '../actions/';

const reducer = (state = {}, action) => {
	const {type, initData} = action;

	switch (type) {
		case actions.ACTIONS_INITIALIZATION:
	       return {
	             ...state,
	             initData
	             
	    };

		default:
		     return state;
	 }
};
export default reducer;

