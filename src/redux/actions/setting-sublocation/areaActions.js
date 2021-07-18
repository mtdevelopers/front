import axios from "../../../axios";
import { set_error } from "../uiActions";

export const GET_AREA_LIST = "GET_AREA_LIST";
export const FETCH_SUCCESS_AREA = "FETCH_SUCCESS_AREA";
export const FAIL_FETCH = "FAIL_FETCH";
export const CLEAR_LIST_AREA = "CLEAR_LIST_AREA";
export const FETCH_CITY_SUCCESS = "FETCH_CITY_SUCCESS";
export const SET_PARENT_CITY_ID = "SET_PARENT_CITY_ID";
export const ADD_SUCCESS_AREA = "ADD_SUCCESS_AREA";
export const DELETE_AREA_FROM_UI = "DELEETE_AREA_FROM_UI";

export const ADD_SEARCH_ID = "ADD_SEARCH_ID";
export const DELETE_SUCCCESS_AREA = "DELETE_SUCCESS_AREA";
export const SHOW_SEARCH_RESULT = "SHOW_SEARCH_RESULT";





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
            dispatch(set_error(error.response.data));
          });
      };
}

export const create_area = (object) => {
    return (dispatch) => {
        axios 
            .post("/area",object,config)
            .then(response => dispatch(add_success_area(response.data.data)))
            .catch(error => dispatch(set_error(error.response.data)))
    }
}
export const delete_area = (id) => {
    return (dispatch) => {
        axios.delete(`/area/${id}`,config)
            .then(() => dispatch(delete_success_area('با موفقیت حذف شد!',id)))
            .catch(error => dispatch(set_error(error.response.data)))
    }
}

export const search_area = (name,id) => {
    return (dispatch) => {
        console.log(name,id)
        axios.get(`/area?name=${name}&city=${id}`)
            .then(response => {
                if(response.data.data.length === 0 ){
                    dispatch(set_error({message:"یافت نشد!"}))
                }else{
                    dispatch(show_search_result(response.data.data))
                }
            })
            .catch(error => dispatch(set_error(error.response.data)))
    }
}
export const update_area = (id,name) => {
    return {
        type:DELETE_AREA_FROM_UI,
        id,
        name
    }
}
export const show_search_result = (data) => {
    return{
        type:SHOW_SEARCH_RESULT,
        data
    }
}
export const update_area_permanent = (object,id) => {
    return (dispatch) => {
        axios.patch(`/area/${id}`,object,config)
            .then(response => dispatch(add_success_area(response.data.data)))
            .catch(error => dispatch(set_error(error.response.data)))
    }
}
export const set_search_id_area = (id) => {
    return{
        type:ADD_SEARCH_ID,
        id
    }
}
export const add_success_area = (data) => {
    return{
        type:ADD_SUCCESS_AREA,
        data
    }
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