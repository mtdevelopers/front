import * as actionTypes from '../actions/uiActions';

const initialState = {
    isLoading:false,
    error:false,
    errorBody:null,
    sidebar:false
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_IS_LOADING:
        return {...state,isLoading:!state.isLoading}
      case actionTypes.SET_ERROR:
        return {...state, error:true, errorBody:action.error.message}
      case actionTypes.HIDE_ERROR:
        return {...state, error:false}
      case actionTypes.SHOW_SIDEBAR:
        return {...state,sidebar:!state.sidebar}
      default: {
        return state;
      }
    }
}

export default reducer;