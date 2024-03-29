import * as actionTypes from '../../actions/countryActions';

const initialState = {
    name:null,
    id:null,
    listOfCountry:[],
    listOfState:[],
    listOfCity:[],
    success:false,
    alertBody:null,
    parentId:null,
    searchId:null,
    activeCountryDrop:"انتخاب کنید",
    activeStateDrop:"انتخاب کنید",
    activeCityDrop:"انتخاب کنید"

};


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_SUCCESS_COUNTRY:
        return {...state,listOfCountry:state.listOfCountry.concat(action.data)};
      case actionTypes.FETCH_SUCCESS_STATE:
        return {...state,listOfState:state.listOfState.concat(action.data)};
      case actionTypes.FETCH_SUCCESS_CITY:
          return {...state,listOfCity:state.listOfCity.concat(action.data)}
      case actionTypes.ADD_SUCCESS_COUNTRY:
        return {...state,listOfCountry:state.listOfCountry.concat(action.data),parentId:null,success:true,alertBody:"کشور جدید با موفقیت ثبت شد!"}
      case actionTypes.ADD_SUCCESS_STATE:
        return {...state,listOfState:state.listOfState.concat(action.data),parentId:null,success:true,alertBody:"استان جدید با موفقیت ثبت شد!"}
      case actionTypes.ADD_SUCCESS_CITY:
        return {...state,listOfCity:state.listOfCity.concat(action.data),parentId:null,success:true,alertBody:"شهر جدید با موفقیت ثبت شد!"}
      case actionTypes.FETCH_FAIL:
        return {...state,error:true,success:false,errorBody:action.error.message}
      case actionTypes.SHOW_ALERT:
        return {...state,error:true,success:false,errorBody:action.msg}
      case actionTypes.DELETE_COUNTRY:
        const countryAfterDelete = state.listOfCountry.filter(
          (item) => item._id !== action.id
        );
        return{
          ...state,listOfCountry:countryAfterDelete,success:true,alertBody:"با موفقیت حذف شد.",
        }
      case actionTypes.DELETE_STATE:
          const stateAfterDelete = state.listOfState.filter(
            (item) => item._id !== action.id
          );
          return{
            ...state,listOfState:stateAfterDelete,success:true,alertBody:"با موفقیت حذف شد.",
          }
      case actionTypes.DELETE_CITY:
        const cityAfterDelete = state.listOfCity.filter(
          (item) => item._id !== action.id
        );
        return{
          ...state,listOfCity:cityAfterDelete,success:true,alertBody:"با موفقیت حذف شد.",
        }
      case actionTypes.DELETE_COUNTRY_FROM_UI:
        const countryAfterDeleteUi = state.listOfCountry.filter(
          (item) => item._id !== action.id
        );
        return{
          ...state,listOfCountry:countryAfterDeleteUi,name:action.name,id:action.id
        }
      case actionTypes.DELETE_STATE_FROM_UI:
        const stateAfterDeleteUi = state.listOfState.filter(
          (item) => item._id !== action.id
        );
        return{
          ...state,listOfState:stateAfterDeleteUi,name:action.name,id:action.id
        }
      case actionTypes.DELETE_CITY_FROM_UI:
          const cityAfterDeleteUi = state.listOfCity.filter(
            (item) => item._id !== action.id
          );
          return{
            ...state,listOfCity:cityAfterDeleteUi,name:action.name,id:action.id
          }
      case actionTypes.UPDATE_COUNTRY_SUCCESS:
        return{
          ...state,listOfCountry:state.listOfCountry.concat(action.data),name:null,id:null,success:true,alertBody:"با موفقیت به روز رسانی شد."
        }
      case actionTypes.UPDATE_STATE_SUCCESS:
        return{
          ...state,listOfState:state.listOfState.concat(action.data),name:null,id:null,success:true,alertBody:"با موفقیت به روز رسانی شد."
        }
      case actionTypes.UPDATE_CITY_SUCCESS:
        return{
          ...state,listOfCity:state.listOfCity.concat(action.data),name:null,id:null,success:true,alertBody:"با موفقیت به روز رسانی شد."
        }
      case actionTypes.SHOW_RESULT_COUNTRY:
        return{
          ...state,listOfCountry:action.data,success:null
        }
      case actionTypes.SHOW_RESULT_STATE:
        return{
          ...state,listOfState:action.data,success:null
        }
      case actionTypes.SHOW_RESULT_CITY:
        return{
          ...state,listOfCity:action.data,success:null
        }
      case actionTypes.SET_PARENT_COUNTRY_ID:
        return{
          ...state,parentId:action.id,activeCountryDrop:action.name,searchId:action.id,success:null
        }
      case actionTypes.SET_PARENT_STATE_ID:
          return{
            ...state,parentId:action.id,activeStateDrop:action.name,searchId:action.id,success:null
          }
        case actionTypes.SET_PARENT_CITY_ID:
          return{
            ...state,parentId:action.id,activeCityDrop:action.name,searchId:action.id,success:null
          }
      case actionTypes.SET_SEARCH_ID:
        return{
          ...state,searchId:action.id,parentId:null,success:null
        }
      case actionTypes.REFRESH_COUNTRY_LIST:
        return{
          ...state,listOfCountry:state.listOfCountry.concat(action.data)
        }
      case actionTypes.REFRESH_STATE_LIST:
          return{
            ...state,listOfState:state.listOfState.concat(action.data)
          }
      case actionTypes.REFRESH_CITY_LIST:
        return{
          ...state,listOfCity:state.listOfCity.concat(action.data)
        }
      case actionTypes.CLEAR_LIST_COUNTRY:
        return{
          ...state,listOfCountry:[]
        }
      case actionTypes.CLEAR_LIST_STATE:
        return{
          ...state,listOfState:[]
        }
      case actionTypes.CLEAR_LIST_CITY:
        return{
          ...state,listOfCity:[]
        }

      default: {
        return state;
      }
    }
}



export default reducer;