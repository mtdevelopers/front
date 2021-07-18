
import {connect} from "react-redux";
import * as actionCreators from "../../redux/actions/index";
import {useState} from "react";
import {Link} from "react-router-dom";

import {FiSettings} from "react-icons/fi";
import {SiTripadvisor} from "react-icons/si";
import {FaUserGraduate} from "react-icons/fa";
import {RiUserSearchLine} from "react-icons/ri";
import {FiHome} from "react-icons/fi";
import {FaAngleLeft} from "react-icons/fa";


const SideMenuAddComponent = (props) => {
	const icon = (icon) => {
		switch (props.icon) {
			case "add":
				return <FiHome />	
			case "req":
				return <SiTripadvisor />
			case "realtor":
				return <FaUserGraduate />	
			case "user":
				return <RiUserSearchLine />	
			case "setting":
				return <FiSettings />			
			default:
				break;
		}
	} 

	const selectClass = (show,active) => {
		let defaultClass = "nav-item"
		if(show){
			defaultClass = "nav-item show";
		}
		if(active){
			defaultClass = "nav-item show active";
		}
		return defaultClass;
	}
	const [state,setState] = useState(false);
	return(
        <li className={selectClass(props.showStatus,props.activeStatus)} onClick={props.showHandler}>
			<p className="nav-link with-sub my-0" ><span className="shape1"></span><span className="shape2"></span><span className="i sidemenu-icon">{icon(props.icon)}</span><span className="sidemenu-label">{props.itemTitle}</span><span className="i angle"><FaAngleLeft /></span></p>
			<ul className="nav-sub">
				{props.subItemTitles.map(element => {
					const address = element.split("-")[0];
					const name = element.split("-")[1];
					const linkAddress = `/${props.itemLink}/${address}`;
					return(
						<li className="nav-sub-item" onClick={props.activateHandler}>
							<Link to={linkAddress} className="nav-sub-link my-0" onClick={() => setState(!state)}>{name}</Link>
						</li>
					)
					
				})}
				
			</ul>
		</li>
    )
}





export default SideMenuAddComponent;


