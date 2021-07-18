import React, { useState } from 'react';
import { Button,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import * as actionCreators from "../../redux/actions/index";
import {connect} from "react-redux";

const DropwdownButton = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  const selectHandler = (e,id) => {
    e.preventDefault();
    props.setSearchId(id);
  }
  return (
    <ButtonDropdown className="w-100" isOpen={dropdownOpen} toggle={toggle}>
      <Button className="btn-width" id="caret" color={props.color}>{props.identifier === "state" ? props.activeCountryDrop : props.activeStateDrop}</Button>
      <DropdownToggle split color={props.color} />
      <DropdownMenu>
        {props.items.map((item) =>  <DropdownItem onClick={(event) => selectHandler(event,item._id)} key={item._id}>{item.name}</DropdownItem>
        )}
      </DropdownMenu>
    </ButtonDropdown>
  );
}
const mapStateToProps = (state) => {
  return{
    activeCountryDrop:state.country.activeCountryDrop,
    activeStateDrop:state.country.activeStateDrop
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setSearchId : (id) => dispatch(actionCreators.set_search_id(id)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DropwdownButton);