import axios from "../../axios";

export const START_AUTH = "START_AUTH";
export const SUCCESS_AUTH = "SUCCESS_AUTH";
export const FAIL_AUTH = "FAIL_AUTH";
export const LOGOUT = "LOGOUT";
export const HIDE_ERROR = "HIDE_ERROR"


export const start_auth = (user) => {
    return (dispatch) => {
        axios
          .post("/realtor/login",user)
          .then((response) => {
            dispatch(success_auth(response.data));
          })
          .catch((error) => {
            dispatch(fail_auth(error.message));
          });
      };
    
}

export const logout = () => {
  return{
    type:LOGOUT
  }
}
export const hide_error = () => {
  return{
    type:HIDE_ERROR
  }
}
export const success_auth = (data) => {
  return {
    type: SUCCESS_AUTH,
    data
  };
};
export const fail_auth = (error) => {
  return {
    type: FAIL_AUTH,
    error
  };
};
