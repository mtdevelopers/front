import axios from "../../../axios";
import { set_error } from "../uiActions";

export const GET_AREA_LIST = "GET_AREA_LIST";
export const FETCH_SUCCESS_AREA = "FETCH_SUCCESS_AREA";
export const FAIL_FETCH = "FAIL_FETCH";
export const CLEAR_LIST_AREA = "CLEAR_LIST_AREA";
export const FETCH_CITY_SUCCESS = "FETCH_CITY_SUCCESS";

export const DELETE_SUCCCESS_AREA = "DELETE_SUCCESS_AREA";

const config = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
};

export const get_area_list = () => {
    return (dispatch) => {
        axios
          .get(`/area`)
          .then((response) => {
            dispatch(fetch_success_area(response.data.data));
          })
          .catch((error) => {
            dispatch(fetch_fail(error.response.data));
          });
      };
}
export const get_city_list_area = () => {
    return (dispatch) => {
        axios
          .get(`/city`)
          .then((response) => {
            dispatch(fetch_success_city(response.data.data));
          })
          .catch((error) => {
            dispatch(fetch_fail(error.response.data));
          });
      };
}
export const create_area = (object) => {

}
export const delete_area = (id) => {
    return (dispatch) => {
        axios.delete(`/area/${id}`,config)
            .then(() => dispatch(delete_success_area('با موفقیت حذف شد!',id)))
            .catch(error => dispatch(set_error(error.response.data)))
    }
}
export const search_area = (input) => {

}
export const update_area = () => {

}
export const update_area_permanent = () => {

}
export const fetch_success_area = (data) => {
    return{
        type:FETCH_SUCCESS_AREA,
        data
    }
}
export const fetch_success_city = (data) => {
    return{
        type:FETCH_CITY_SUCCESS,
        data
    }
}
export const fetch_fail = (data) => {
    return{
        type:FAIL_FETCH,
        data
    }
}
export const clear_list_area = () => {
    return{
        type:CLEAR_LIST_AREA
    }
}
export const delete_success_area = (msg,id) => {
    return{
        type:DELETE_SUCCCESS_AREA,
        msg,
        id
    }
}