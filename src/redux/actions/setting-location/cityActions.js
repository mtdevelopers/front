import axios from "../../../axios";
import * as actionCreators from "../index";

export const GET_City_LIST = "GET_City_LIST";
export const FETCH_SUCCESS_CITY = "FETCH_SUCCESS_CITY";



const config = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
  };
  

export const get_city_list = () => {
return (dispatch) => {
    axios
        .get(`/city`)
        .then((response) => {
            dispatch(fetch_success_city(response.data.data));
        })
        .catch((error) => {
            console.log(error.reponse);
            // dispatch(actionCreators.fetch_fail(error.response));
        });
    };

}

export const fetch_success_city = (data) => {
    return{
        type:FETCH_SUCCESS_CITY,
        data
    }
}