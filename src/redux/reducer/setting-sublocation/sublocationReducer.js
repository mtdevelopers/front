import * as actionTypes from "../../actions/setting-sublocation/areaActions";

const initialState = {
    listOfArea:[],
    listOfCity:[],
    error:null,
    errorBody:null,
    success:false,
    successBody:null
}

const reducer = (state=initialState,action) => {
    switch (action.type) {
        case actionTypes.FETCH_CITY_SUCCESS:
            return{
                ...state,listOfCity:state.listOfCity.concat(action.data)
            }
        case actionTypes.FETCH_SUCCESS_AREA:
            return{
                ...state,listOfArea:state.listOfArea.concat(action.data)
            }
        case actionTypes.FAIL_FETCH:
            return{
                ...state,error:true,errorBody:action.data
            }
        case actionTypes.DELETE_SUCCCESS_AREA:
            const areaAfterDelete = state.listOfArea.filter(area => area._id !== action.id);
            return{
                ...state,listOfArea:areaAfterDelete,success:true,successBody:action.msg
            }
        default:
            return state;
    }
}

export default reducer;