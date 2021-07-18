import axios from "../../axios";


export const CREATE_COUNTRY = "CREATE_COUNTRY";
export const CREATE_STATE = "CREATE_STATE";
export const CREATE_CITY = "CREATE_CITY";

export const FETCH_SUCCESS_COUNTRY = "FETCH_SUCCESS_COUNTRY";
export const FETCH_SUCCESS_STATE = "FETCH_SUCCESS_STATE";
export const FETCH_SUCCESS_CITY = "FETCH_SUCCESS_CITY";

export const DELETE_COUNTRY = "DELETE_COUNTRY";
export const DELETE_STATE = "DELETE_STATE";
export const DELETE_CITY = "DELETE_CITY";

export const ADD_SUCCESS_COUNTRY = "ADD_SUCCESS_COUNTRY";
export const ADD_SUCCESS_STATE = "ADD_SUCCESS_STATE";
export const ADD_SUCCESS_CITY = "ADD_SUCCESS_CITY";



export const FETCH_FAIL = "FETCH_FAIL";
export const HIDE_ALERT = "HIDE_ALERT";
export const SHOW_ALERT = "SHOW_ALERT";

export const SHOW_RESULT_COUNTRY = "SHOW_RESULT_COUNTRY";
export const SHOW_RESULT_STATE = "SHOW_RESULT_STATE";
export const SHOW_RESULT_CITY = "SHOW_RESULT_CITY";

export const DELETE_COUNTRY_FROM_UI = "DELETE_COUNTRY_FROM_UI";
export const DELETE_STATE_FROM_UI = "DELETE_STATE_FROM_UI";
export const DELETE_CITY_FROM_UI = "DELETE_CITY_FROM_UI";

export const UPDATE_COUNTRY_SUCCESS = "UPDATE_COUNTRY_SUCCESS";
export const UPDATE_STATE_SUCCESS = "UPDATE_STATE_SUCCESS";
export const UPDATE_CITY_SUCCESS = "UPDATE_CITY_SUCCESS";

export const REFRESH_COUNTRY_LIST = "REFRESH_COUNTRY_LIST";
export const REFRESH_STATE_LIST = "REFRESH_STATE_LIST";
export const REFRESH_CITY_LIST = "REFRESH_CITY_LIST";

export const CLEAR_LIST_COUNTRY = "CLEAR_LIST_COUNTRY";
export const CLEAR_LIST_STATE = "CLEAR_LIST_STATE";
export const CLEAR_LIST_CITY = "CLEAR_LIST_CITY";


export const UPDATE_COUNTRY = "UPDATE_COUNTRY";

export const SET_PARENT_COUNTRY_ID = "SET_PARENT_COUNTRY_ID";
export const SET_PARENT_STATE_ID = "SET_PARENT_STATE_ID";

export const SET_SEARCH_ID = "SET_SEARCH_ID";


const config = {
  headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
};

export const get_country_list = () => {
    return (dispatch) => {
        axios
          .get(`/country`)
          .then((response) => {
            dispatch(fetch_success_country(response.data.data));
          })
          .catch((error) => {
            dispatch(fetch_fail(error.response.data));
          });
      };
}
///////////////////////////////////////////////////////////////////////////////////////
/////create country
export const create_country = (name) => {
    return (dispatch) => {
        
        axios
          .post("/country",name,config)
          .then((response) => {
              dispatch(add_success_country(response.data.data))
          })
          .catch((error) => {
            dispatch(fetch_fail(error.response.data));
          });
      };
}
//create state
export const create_state = (name) => {

  return (dispatch) => {
      
      axios
        .post("/state",name,config)
        .then((response) => {
            dispatch(add_success_state(response.data.data))
        })
        .catch((error) => {
          dispatch(fetch_fail(error.response.data));
        });
    };
}
//create city
export const create_city = (name) => {
  return (dispatch) => {
      
      axios
        .post("/city",name,config)
        .then((response) => {
            dispatch(add_success_city(response.data.data))
        })
        .catch((error) => {
          dispatch(fetch_fail(error.response.data));
        });
    };
}
///////////////////////////////////////////////////////////////////////////////////////
/////delete country
export const delete_country = (id) => {
  return (dispatch) => {
    axios.delete(`/country/${id}`,config)
        .then((response) => {
          dispatch(delete_country_success(id))
        })
        .catch(error => {
          dispatch(fetch_fail(error.response.data))
          }
        )
  }
}

export const delete_country_success = (id) => {
  return{
    type:DELETE_COUNTRY,
    id
  }
}
/////delete state
export const delete_state = (id) => {
  return (dispatch) => {
    axios.delete(`/state/${id}`,config)
        .then((response) => {
          dispatch(delete_state_success(id))
        })
        .catch(error => {
          dispatch(fetch_fail(error.response.data))
          }
        )
  }
}

export const delete_state_success = (id) => {
  return{
    type:DELETE_STATE,
    id
  }
}
/////delete city
export const delete_city = (id) => {
  return (dispatch) => {
    axios.delete(`/city/${id}`,config)
        .then((response) => {
          dispatch(delete_city_success(id))
        })
        .catch(error => {
          dispatch(fetch_fail(error.response.data))
          }
        )
  }
}

export const delete_city_success = (id) => {
  return{
    type:DELETE_CITY,
    id
  }
}
///////////////////////////////////////////////////////////////////////////////////////
export const update_country_permanent = (name,id) => {
  return (dispatch) => {
    axios.patch(`/country/${id}`,name,config)
          .then(response => dispatch(update_country_success(response.data.data)))
          .catch(error => dispatch(fetch_fail(error.message.data)))
  }
}
export const update_state_permanent = (name,id) => {
  return (dispatch) => {
    axios.patch(`/state/${id}`,name,config)
          .then(response => dispatch(update_state_success(response.data.data)))
          .catch(error => dispatch(fetch_fail(error.message.data)))
  }
}
export const update_city_permanent = (name,id) => {
  return (dispatch) => {
    axios.patch(`/city/${id}`,name,config)
          .then(response => dispatch(update_city_success(response.data.data)))
          .catch(error => dispatch(fetch_fail(error.message.data)))
  }
}
///////////////////////////////////////////////////////////////////////////
// search country
export const search_country = (name) => {
  return (dispatch) => {
    axios.get(`/country?name=${name}`)
        .then(response => {
          if(response.data.data.length === 0){
            dispatch(show_alert("یافت نشد!"))
          }else{
            dispatch(show_search_country(response.data.data))
          }
        })
        .catch(error => dispatch(fetch_fail(error.response.data)))
  }
}
/// search state
export const search_state = (name,country) => {
  return (dispatch) => {
    axios.get(`/state?name=${name}&country=${country}`)
        .then(response => {
          if(response.data.data.length === 0){
            dispatch(show_alert("یافت نشد!"))
          }else{
            dispatch(show_search_state(response.data.data))
          }
        })
        .catch(error => dispatch(fetch_fail(error.response.data)))
  }
}
//search city
export const search_city = (name,state) => {
  return (dispatch) => {
    axios.get(`/city?name=${name}&state=${state}`)
        .then(response => {
          if(response.data.data.length === 0){
            dispatch(show_alert("یافت نشد!"))
          }else{
            dispatch(show_search_city(response.data.data))
          }
        })
        .catch(error => dispatch(fetch_fail(error.response.data)))
  }
}
/////////////////////////////////////////////////////////////////////////
// refresh country list
export const refresh_country_list = (data) => {
  return{
    type: REFRESH_COUNTRY_LIST,
    data
  }
}
export const refresh_state_list = (data) => {
  return{
    type: REFRESH_STATE_LIST,
    data
  }
}
export const refresh_city_list = (data) => {
  return{
    type: REFRESH_CITY_LIST,
    data
  }
}
export const show_search_country = (data) => {
  return{
    type:SHOW_RESULT_COUNTRY,
    data
  }
}
export const show_search_state = (data) => {
  return{
    type:SHOW_RESULT_STATE,
    data
  }
}
export const show_search_city = (data) => {
  return{
    type:SHOW_RESULT_CITY,
    data
  }
}
export const update_country_success = (data) => {
  return{
    type:UPDATE_COUNTRY_SUCCESS,
    data
  }
}
export const update_state_success = (data) => {
  return{
    type:UPDATE_STATE_SUCCESS,
    data
  }
}
export const update_city_success = (data) => {
  return{
    type:UPDATE_CITY_SUCCESS,
    data
  }
}
export const update_country = (id,name) => {
  console.log("here");
  return{
    type:DELETE_COUNTRY_FROM_UI,
    id,
    name
  }  
}
export const update_state = (id,name) => {
  return{
    type:DELETE_STATE_FROM_UI,
    id,
    name
  }  
}
export const update_city = (id,name) => {
  return{
    type:DELETE_CITY_FROM_UI,
    id,
    name
  }  
}


export const add_success_country = (data) => {
  return{
    type:ADD_SUCCESS_COUNTRY,
    data
  }
}
export const add_success_state = (data) => {
  return{
    type:ADD_SUCCESS_STATE,
    data
  }
}
export const add_success_city = (data) => {
  return{
    type:ADD_SUCCESS_CITY,
    data
  }
}

export const fetch_success_country = (data) => {
    return{
      type:FETCH_SUCCESS_COUNTRY,
      data
    }
}
export const fetch_success_state = (data) => {
  return{
    type:FETCH_SUCCESS_STATE,
    data
  }
}
export const fetch_success_city = (data) => {
  return{
    type:FETCH_SUCCESS_CITY,
    data
  }
}
export const fetch_fail = (error) => {
    return{
      type:FETCH_FAIL,
      error
    }
}
export const hide_alert = () => {
  return{
    type:HIDE_ALERT
  }
}
export const show_alert = (msg) => {
  return{
    type:SHOW_ALERT,
    msg
  }
}

export const set_parent_country_id = (id,name) => {

  return{
    type:SET_PARENT_COUNTRY_ID,
    id,
    name
  }
}
export const set_parent_state_id = (id,name) => {

  return{
    type:SET_PARENT_STATE_ID,
    id,
    name
  }
}
export const set_search_id = (id) => {
  return{
    type:SET_SEARCH_ID,
    id
  }
}

export const clear_list_country = (identifier) => {
  return{
    type:CLEAR_LIST_COUNTRY
  }
}
export const clear_list_state = (identifier) => {
  return{
    type:CLEAR_LIST_STATE
  }
}
export const clear_list_city = (identifier) => {
  return{
    type:CLEAR_LIST_CITY
  }
}