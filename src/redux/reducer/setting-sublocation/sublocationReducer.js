import * as actionTypes from "../../actions/setting-sublocation/areaActions";

const initialState = {
    name:null,
    id:null,
    searchId:null,
    listOfArea:[],
    error:null,
    errorBody:null,
    success:false,
    successBody:null,
    parentId:null,
    activeCityDrop:"انتخاب کنید"

}

const reducer = (state=initialState,action) => {
    switch (action.type) {
        case actionTypes.FETCH_SUCCESS_AREA:
            return{
                ...state,listOfArea:state.listOfArea.concat(action.data)
            }
        case actionTypes.ADD_SUCCESS_AREA:
            return{
                ...state,listOfArea:state.listOfArea.concat(action.data)
            }
        case actionTypes.DELETE_SUCCCESS_AREA:
            const areaAfterDelete = state.listOfArea.filter(area => area._id !== action.id);
            return{
                ...state,listOfArea:areaAfterDelete,success:true,successBody:action.msg
            }
        case actionTypes.SET_PARENT_CITY_ID:
            return{
                ...state,parentId:action.id,activeCityDrop:action.name,searchId:null,
            }
        case actionTypes.DELETE_AREA_FROM_UI:
            const areaAfterDeleteUi = state.listOfArea.filter(item => item._id !== action.id);
            return{
                ...state,listOfArea:areaAfterDeleteUi,name:action.name,id:action.id
            }
        case actionTypes.ADD_SEARCH_ID:
            return{
                ...state,searchId:action.id
            }
        case actionTypes.SHOW_SEARCH_RESULT:
            return{
                ...state,listOfArea:action.data
            }
        case actionTypes.CLEAR_LIST_AREA:
            return{
                ...state,listOfArea:[]
            }
        default:
            return state;
    }
}

export default reducer;

