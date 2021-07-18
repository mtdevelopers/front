import "../../assets/scss/newStyle.scss";
import {connect} from "react-redux";
import * as actionCreators from "../../redux/actions/index";
import {Link} from "react-router-dom";

import {RiFootprintLine} from "react-icons/ri";
import {GoDashboard} from "react-icons/go";
import logoA from "../../assets/img/brand/logo-light.png";
import logoB from "../../assets/img/brand/icon-light.png";
import logoC from "../../assets/img/brand/logo.png";
import logoD from "../../assets/img/brand/icon.png";

import SideMenuAddComponent from "./sideMenuAddComponent";




const Sidemenu = (props) =>{
	

    return(
        <div className="main-sidebar main-sidebar-sticky side-menu">
		<div className="sidemenu-logo">
			<a className="main-logo" href="/">
				<img src={logoA} className="header-brand-img desktop-logo" alt="لوگو" />
				<img src={logoB} className="header-brand-img icon-logo" alt="لوگو" />
				<img src={logoC} className="header-brand-img desktop-logo theme-logo" alt="لوگو" />
				<img src={logoD} className="header-brand-img icon-logo theme-logo" alt="لوگو" />
			</a>
		</div>
		<div className="main-sidebar-body">
			<ul className="nav">
				<li className="nav-header"><span className="nav-label">سامانه مدیریت آگهی و مشتری</span></li>
				<li className={props.sidemenuState.activateDashboard ? "nav-item active" : "nav-item"} onClick={props.activateDashboard}>
					<Link to="/" className="nav-link my-0"><span className="shape1"></span><span className="shape2"></span><span className="i sidemenu-icon"><GoDashboard /></span><span className="sidemenu-label">داشبورد</span></Link>
				</li>
				<SideMenuAddComponent activeStatus={props.sidemenuState.activateAdd} showStatus={props.sidemenuState.showAdd} showHandler={props.showAdd} activateHandler={props.activateAdd} icon={"add"} itemLink={"property"} itemTitle={"آگهی ها"} subItemTitles={["newproperty-آگهی جدید","allproperty-لیست آگهی ها","myproperty-آگهی های من","waitforconfirm-در انتظار بررسی","archived-بایگانی","recyclebin-زباله دان","setting-تنظیمات"]}/>
				<SideMenuAddComponent activeStatus={props.sidemenuState.activateReq} showStatus={props.sidemenuState.showReq} showHandler={props.showReq} activateHandler={props.activateReq} icon={"req"} itemLink={"request"} itemTitle={"ارتباط با مشتری"} subItemTitles={["newrequest-درخواست جدید","allrequest-لیست درخواست ها","myrequest-درخواست های من","waitforconfirm-در انتظار بررسی","archive-بایگانی","setting-تنظیمات"]}/>
				<SideMenuAddComponent activeStatus={props.sidemenuState.activateRealtor} showStatus={props.sidemenuState.showRealtor} showHandler={props.showRealtor} activateHandler={props.activateRealtor} icon={"realtor"} itemLink={"realtor"} itemTitle={"مشاوران"} subItemTitles={["newrealtor-مشاور جدید","allrealtor-لیست مشاوران","setting-تنظیمات"]}/>
				<SideMenuAddComponent activeStatus={props.sidemenuState.activateUser} showStatus={props.sidemenuState.showUser} showHandler={props.showUser} activateHandler={props.activateUser} icon={"user"} itemLink={"user"} itemTitle={"باشگاه مشتریان"} subItemTitles={["newuser-مشتری جدید","alluser-لیست مشتریان","setting-تنظیمات"]}/>
				<SideMenuAddComponent activeStatus={props.sidemenuState.activateSetting} showStatus={props.sidemenuState.showSetting} showHandler={props.showSetting} activateHandler={props.activateSetting} icon={"setting"} itemLink={"setting"} itemTitle={"تنظیمات"} subItemTitles={["location/country-کشور، استان و شهر","sublocation/area- منطقه و مسیر","user/buystep-مشتری","role-نقش ها و مجوزها","organization-پست سازمانی","template/event-قالب ها"]}/>
				<li className={props.sidemenuState.activateLog ? "nav-item active" : "nav-item"} onClick={props.activateLog}>
					<Link to="/log" className="nav-link with-sub my-0"><span className="shape1"></span><span className="shape2"></span><span className="i sidemenu-icon"><RiFootprintLine /></span><span className="sidemenu-label">ردپای کاربران</span></Link>
				</li>
			</ul>
		</div>
	</div>
    )
}

const mapStateToProps = (state) => {
    return {
		sidemenuState:state.sidemenu
	}
};
const mapDispatchToProps =(dispatch) => {
    return{
        showAdd: () =>  dispatch(actionCreators.show_add()),
        showReq: () =>  dispatch(actionCreators.show_req()),
        showRealtor: () =>  dispatch(actionCreators.show_realtor()),
        showUser: () =>  dispatch(actionCreators.show_user()),
        showSetting: () =>  dispatch(actionCreators.show_setting()),

		activateDashboard: () => dispatch(actionCreators.activate_dashboard()),
		activateAdd: () => dispatch(actionCreators.activate_add()),
		activateReq: () => dispatch(actionCreators.activate_req()),
		activateRealtor: () => dispatch(actionCreators.activate_realtor()),
		activateUser: () => dispatch(actionCreators.activate_user()),
		activateSetting: () => dispatch(actionCreators.activate_setting()),
		activateLog: () => dispatch(actionCreators.activate_log()),

	}
};
export default connect(mapStateToProps,mapDispatchToProps)(Sidemenu);
