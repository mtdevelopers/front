import *  as actionTypes from "../actions/sidemenuActions";
import {updateObject} from "../utility";

const initialState = {
    showAdd:false,
    showReq:false,
    showRealtor:false,
    showUser:false,
    showSetting:false,
    activateDashboard:true,
    activateAdd:false,
    activateReq:false,
    activateRealtor:false,
    activateUser:false,
    activateSetting:false,
    activateLog:false,

    

};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_ADD:
            return updateObject(state,{showAdd : !state.showAdd,showReq : false,showRealtor:false, showUser:false, showSetting:false})
        case actionTypes.SHOW_REQ:
            return updateObject(state,{ showAdd : false, showReq : !state.showReq,showRealtor:false, showUser:false, showSetting:false})
        case actionTypes.SHOW_REALTOR:
            return updateObject(state,{showAdd : false,showReq : false, showRealtor : !state.showRealtor ,showUser:false, showSetting:false})
        case actionTypes.SHOW_USER:
            return updateObject(state,{showAdd : false,showReq : false,showRealtor:false, showUser : !state.showUser, showSetting:false})
        case actionTypes.SHOW_SETTING:
            return updateObject(state,{showAdd : false,showReq : false,showRealtor:false,showUser:false,showSetting : !state.showSetting})
        
        case actionTypes.ACTIVATE_DASHBOARD:
            return {...state,activateDashboard:true ,activateAdd:false, activateReq:false,activateRealtor:false,activateUser:false,activateSetting:false,activateLog:false}
        case actionTypes.ACTIVATE_ADD:
            return {...state,activateDashboard:false ,activateAdd:true, activateReq:false,activateRealtor:false,activateUser:false,activateSetting:false,activateLog:false}
        case actionTypes.ACTIVATE_REQ:
            return {...state,activateDashboard:false ,activateAdd:false, activateReq:true,activateRealtor:false,activateUser:false,activateSetting:false,activateLog:false}
        case actionTypes.ACTIVATE_REALTOR:
            return {...state,activateDashboard:false ,activateAdd:false, activateReq:false,activateRealtor:true,activateUser:false,activateSetting:false,activateLog:false}
        case actionTypes.ACTIVATE_USER:
            return {...state,activateDashboard:false ,activateAdd:false, activateReq:false,activateRealtor:false,activateUser:true,activateSetting:false,activateLog:false}
        case actionTypes.ACTIVATE_SETTING:
            return {...state,activateDashboard:false ,activateAdd:false, activateReq:false,activateRealtor:false,activateUser:false,activateSetting:true,activateLog:false}
        case actionTypes.ACTIVATE_LOG:
            return {...state,activateDashboard:false ,activateAdd:false, activateReq:false,activateRealtor:false,activateUser:false,activateSetting:false,activateLog:true}
        default:
            return state
    }
}


export default reducer;



// newAdd:false,
//     listAdd:false,
//     myAdd:false,
//     waitAdd:false,
//     archiveAdd:false,
//     recycleAdd:false,
//     settingAdd:false,

//     newReq:false,
//     listReq:false,
//     myReq:false,
//     waitReq:false,
//     archiveReq:false,
//     recycleReq:false,
//     settingReq:false,

//     newRealtor:false,
//     listRealtor:false,
//     settingRealtor:false,

//     newUser:false,
//     listUser:false,
//     settingUser:false,

//     city:false,
//     area:false,
//     buyStep:false,
//     cusomerType:false,
//     role:false,
//     organization:false,
//     job:false