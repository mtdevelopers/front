import axios from "../../../axios";
import * as actionCreators from "../index";

export const GET_STATE_LIST = "GET_STATE_LIST";
export const FETCH_SUCCESS_STATE = "FETCH_SUCCESS_STATE";



const config = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
  };
  

export const get_state_list = () => {
return (dispatch) => {
    axios
        .get(`/state`)
        .then((response) => {
            dispatch(fetch_success_state(response.data.data));
        })
        .catch((error) => {
            dispatch(actionCreators.fetch_fail(error.response));
        });
    };

}

export const fetch_success_state = (data) => {
    return{
        type:FETCH_SUCCESS_STATE,
        data
    }
}