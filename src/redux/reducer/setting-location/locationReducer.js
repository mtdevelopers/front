import * as actionTypes from '../../actions/setting-location/locationActions';

const initialState = {
    activeField:"country"
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ACTIVATE_LINK:
        return {...state,activeField:action.data}
      
      default: {
        return state;
      }
    }
}

export default reducer;