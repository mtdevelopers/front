/* eslint-disable default-case */
import * as actionTypes from '../actions/authActions';

const initialState = {
    firstName:null,
    lastName:null,
    code:null,
    mobileNumber:null,
    role:null,
    organizationPosition:null,
    city:null,
    area:null,
    workplace:null,
    imageCover:null,
    headRealtor:null,
    token:null,
    success:false,
    error:null
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SUCCESS_AUTH:
        localStorage.setItem("user", action.data.user);
        localStorage.setItem("token", action.data.token);
        
        return {...state,
            firstName:action.data.user.firstName,
            lastName:action.data.user.lastName,
            code:action.data.user.code,
            mobileNumber:action.data.user.mobileNumber,
            role:action.data.user.role,
            organizationPosition:action.data.user.organizationPosition,
            city:action.data.user.city,
            area:action.data.user.area,
            workplace:action.data.user.workplace,
            imageCover:action.data.user.imageCover,
            headRealtor:action.data.user.headRealtor,
            toke:action.data.token,
            success:true,
            error:false,
            logout:null
        }
      case actionTypes.LOGOUT:
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        return {...state, 
          firstName:null,
          lastName:null,
          code:null,
          mobileNumber:null,
          role:null,
          organizationPosition:null,
          city:null,
          area:null,
          workplace:null,
          imageCover:null,
          headRealtor:null,
          token:null,
          success:null,
          error:null,
          logout:true
        }
      case actionTypes.FAIL_AUTH:
        return {...state, error:true }
      case actionTypes.HIDE_ERROR:
        return {
          ...state, error:null
        }
      default:
        return state
    }
}

export default reducer;


