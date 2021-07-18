import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropwdownButton = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle split color={props.color}>
       {props.children}
      </DropdownToggle>
      <DropdownMenu>
        {props.items.map((item,index) =>  <DropdownItem onClick={item.title === "حذف" ? props.deleteHandler : props.updateHandler} key={index}>{item.title}</DropdownItem>
        )}
      </DropdownMenu>
    </ButtonDropdown>
  );
}


export default DropwdownButton;