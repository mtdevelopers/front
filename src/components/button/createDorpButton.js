import React, { useState } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import * as actionCreators from "../../redux/actions/index";
import {connect} from "react-redux";



const DropwdownButton = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  
  const toggle = () => setOpen(!dropdownOpen);
  const selectHandler = (e,id,name) => {
    e.preventDefault();
    if(props.identifier === "state"){
      props.setParentCountryId(id,name);
    }else if(props.identifier === "city"){
      props.setParentStateId(id,name);
    }else if(props.identifier === "area"){
      props.setParentCityId(id,name)
    }
  }
  return (
    <>
    <ButtonDropdown className="w-100" isOpen={dropdownOpen} toggle={toggle}>
      <Button className="btn-width " id="caret" color={props.color}>{props.identifier === "state" ? props.activeCountryDrop : props.identifier === "city" ? props.activeStateDrop : props.activeCityDrop}</Button>
      <DropdownToggle split color="purple" />
      <DropdownMenu>
        {props.items.map((item) =>  <DropdownItem onClick={(event) => selectHandler(event,item._id,item.name)} key={item._id}>{item.name}</DropdownItem>
        )}
      </DropdownMenu>
    </ButtonDropdown>
    </>
  );
}
const mapStateToProps = (state) => {
  return{
    activeCountryDrop:state.country.activeCountryDrop,
    activeStateDrop:state.country.activeStateDrop,
    activeCityDrop:state.country.activeCityDrop,
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    setParentCountryId : (id,name) => dispatch(actionCreators.set_parent_country_id(id,name)),
    setParentStateId : (id,name) => dispatch(actionCreators.set_parent_state_id(id,name)),
    setParentCityId : (id,name) => dispatch(actionCreators.set_parent_city_id(id,name))

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DropwdownButton);