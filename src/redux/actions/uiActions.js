export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SHOW_SIDEBAR = "SHOW_SIDEBAR";
export const SET_SUCCESS = "SET_SUCCESS";
export const HIDE_ERROR = "HIDE_ERROR";

export const set_is_loading = () => {
    return {
      type: SET_IS_LOADING,
    };
}
export const set_error = (error) => {
  return {
    type: SET_ERROR,
    error
  };
};
export const hide_error = () => {
  return{
    type:HIDE_ERROR,
  }
}
export const set_success = (success) => {
  return{
    type:SET_SUCCESS,
    success
  }
} 
export const show_sidebar = () => {
  return {
    type: SHOW_SIDEBAR,
  };
};
