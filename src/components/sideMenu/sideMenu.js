// import "../../assets/scss/sidemenu.scss";
import "../../assets/scss/newStyle.scss";
import {connect} from "react-redux";
import * as actionCreators from "../../redux/actions/index";

import {RiFootprintLine} from "react-icons/ri";
import {FiSettings} from "react-icons/fi";
import {GoDashboard} from "react-icons/go";
import { BsFillBarChartFill } from "react-icons/bs";
import {SiTripadvisor} from "react-icons/si";
import {FaUserGraduate} from "react-icons/fa";
import {RiUserSearchLine} from "react-icons/ri";
import {FiHome} from "react-icons/fi";
import {FaAngleLeft} from "react-icons/fa";
import logoA from "../../assets/img/brand/logo-light.png";
import logoB from "../../assets/img/brand/icon-light.png";
import logoC from "../../assets/img/brand/logo.png";
import logoD from "../../assets/img/brand/icon.png";
import { useState } from "react";

const Sidemenu = () =>{
	const [dashboardstyle,setDashboardstyle] = useState(false);
	const [addstyle,setAddstyle] = useState(true);
	const [reqstyle,setReqstyle] = useState(true);
	const [realtorstyle,setRealtorstyle] = useState(true);
	const [userstyle,setUserstyle] = useState(true);
	const [logstyle,setLogstyle] = useState(true);
	const [settingstyle,setSettingstyle] = useState(true);

	const setOtherFalse =(identifier) => {
		switch (identifier) {
			case "dashboard":
				setReqstyle(true);
				setAddstyle(true);
				setRealtorstyle(true);
				setUserstyle(true);
				setLogstyle(true);
				setSettingstyle(true);
				break;
			case "adds":
				setDashboardstyle(true);
				setReqstyle(true);
				setRealtorstyle(true);
				setUserstyle(true);
				setLogstyle(true);
				setSettingstyle(true);
				break;
			case "reqs":
				setDashboardstyle(true);
				setAddstyle(true);
				setRealtorstyle(true);
				setUserstyle(true);
				setLogstyle(true);
				setSettingstyle(true);
				break;
			case "realtors":
				setDashboardstyle(true);
				setAddstyle(true);
				setReqstyle(true);
				setUserstyle(true);
				setLogstyle(true);
				setSettingstyle(true);
				break;
			case "users":
				setAddstyle(true);
				setReqstyle(true);
				setRealtorstyle(true);
				setDashboardstyle(true);
				setLogstyle(true);
				setSettingstyle(true);
				break;
			case "logs":
				setAddstyle(true);
				setReqstyle(true);
				setRealtorstyle(true);
				setUserstyle(true);
				setDashboardstyle(true);
				setSettingstyle(true);
				break;
			case "settings":
				setAddstyle(true);
				setReqstyle(true);
				setRealtorstyle(true);
				setUserstyle(true);
				setDashboardstyle(true);
				setLogstyle(true);
				break;
			default:
				setAddstyle(true);
				setReqstyle(true);
				setRealtorstyle(true);
				setUserstyle(true);
				break;
		
		}
		
	}
	const changeDashboardStyleHandler = (e) => {
		e.preventDefault();
		if(dashboardstyle){
			setDashboardstyle(!dashboardstyle);
			setOtherFalse("dashboard");
		}
		
	}
	const changeAddStyleHandler = (e) => {
		e.preventDefault();
		if(addstyle){
			setAddstyle(!addstyle);
			setOtherFalse("adds");
		}
	}
	const changeReqStyleHandler = (e) => {
		e.preventDefault();
		if(reqstyle){
			setReqstyle(!reqstyle);
			setOtherFalse("reqs");
		}
	}
	const changeRealtorStyleHandler = (e) => {
		e.preventDefault();
		if(realtorstyle){
			setRealtorstyle(!realtorstyle);
			setOtherFalse("realtors");
		}
	}
	const changeUserStyleHandler = (e) => {
		e.preventDefault();
		if(userstyle){
			setUserstyle(!userstyle);
			setOtherFalse("users");
		}
	}
	const changeLogStyleHandler = (e) => {
		e.preventDefault();
		if(logstyle){
			setLogstyle(!logstyle);
			setOtherFalse("logs");
		}
	}
	const changeSettingStyleHandler = (e) => {
		e.preventDefault();
		if(settingstyle){
			setSettingstyle(!settingstyle);
			setOtherFalse("settings")
		}
	}


    return(
        <div className="main-sidebar main-sidebar-sticky side-menu">
		<div className="sidemenu-logo">
			<a className="main-logo" href="index.html">
				<img src={logoA} className="header-brand-img desktop-logo" alt="لوگو" />
				<img src={logoB} className="header-brand-img icon-logo" alt="لوگو" />
				<img src={logoC} className="header-brand-img desktop-logo theme-logo" alt="لوگو" />
				<img src={logoD} className="header-brand-img icon-logo theme-logo" alt="لوگو" />
			</a>
		</div>
		<div className="main-sidebar-body">
			<ul className="nav">
				<li className="nav-header"><span className="nav-label">سامانه مدیریت آگهی و مشتری</span></li>
				<li className={dashboardstyle ? "nav-item" : "nav-item active"} onClick={(event) => changeDashboardStyleHandler(event)}>
					<a className="nav-link" href="index.html"><span className="shape1"></span><span className="shape2"></span><span className="i sidemenu-icon"><GoDashboard /></span><span className="sidemenu-label">داشبورد</span></a>
				</li>

				<li className={addstyle ? "nav-item" : "nav-item active show"} onClick={(event) => changeAddStyleHandler(event)}>
					<a className="nav-link with-sub" href="#"><span className="shape1"></span><span className="shape2"></span><span className="i sidemenu-icon"><FiHome /></span><span className="sidemenu-label">آگهی ها</span><span className="i angle"><FaAngleLeft /></span></a>
					<ul className="nav-sub">
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="cryptodashbaord.html">آگهی جدید</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="cryptomarket.html">لیست آگهی ها</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="cryptocurrencyexchange.html">آگهی های من</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="cryptobuysell.html">در انتظار بررسی</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="cryptowallet.html">بایگانی</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="cryptotranscations.html">زباله دان</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceproducts.html">تنظیمات</a>
						</li>
					</ul>
				</li>
				<li className={reqstyle ? "nav-item" : "nav-item active show"} onClick={(event) => changeReqStyleHandler(event)}>
					<a className="nav-link with-sub" href="#"><span className="shape1"></span><span className="shape2"></span><span className="i sidemenu-icon"><SiTripadvisor /></span><span className="sidemenu-label">ارتباط با مشتری</span><span className="i angle"><FaAngleLeft /></span></a>
					<ul className="nav-sub">
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommercedashboard.html">درخواست جدید</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceproducts.html">لیست درخواست ها</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceproductdetails.html">درخواست های من</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommercecart.html">در انتظار بررسی</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommercecheckout.html">زباله دان</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceorders.html">تقویم کاری</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceproducts.html">تنظیمات</a>
						</li>
					</ul>
				</li>
				<li className={realtorstyle ? "nav-item" : "nav-item active show"} onClick={(event) => changeRealtorStyleHandler(event)}>
					<a className="nav-link with-sub" href="#"><span className="shape1"></span><span className="shape2"></span><span className="i sidemenu-icon"><FaUserGraduate /></span><span className="sidemenu-label">مشاوران</span><span className="i angle"><FaAngleLeft /></span></a>
					<ul className="nav-sub">
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommercedashboard.html">مشاور جدید</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceproducts.html">لیست مشاوران</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceproducts.html">تنظیمات</a>
						</li>
						{/* <li className="nav-sub-item">
						<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceproductdetails.html"></a>
						</li>
						<li className="nav-sub-item">
						<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommercecart.html">سبد خرید</a>
						</li>
						<li className="nav-sub-item">
						<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommercecheckout.html">پرداخت</a>
						</li>
						<li className="nav-sub-item">
						<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceorders.html">سفارشات</a>
						</li>
						<li className="nav-sub-item">
						<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceaccount.html">حساب</a>
						</li> */}
					</ul>
				</li>
				<li className={userstyle ? "nav-item" : "nav-item active show"} onClick={(event) => changeUserStyleHandler(event)}>
					<a className="nav-link with-sub" href="#"><span className="shape1"></span><span className="shape2"></span><span className="i sidemenu-icon"><RiUserSearchLine /></span><span className="sidemenu-label">باشگاه مشتریان</span><span className="i angle"><FaAngleLeft /></span></a>
					<ul className="nav-sub">
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommercedashboard.html">مشتری جدید</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceproducts.html">لیست مشتریان</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceproducts.html">تنظیمات</a>
						</li>
						
					</ul>
				</li>
				<li className={settingstyle ? "nav-item" : "nav-item active show"} onClick={(event) => changeSettingStyleHandler(event)}>
					<a className="nav-link with-sub" href="#"><span className="shape1"></span><span className="shape2"></span><span className="i sidemenu-icon"><FiSettings /></span><span className="sidemenu-label">تنظیمات</span><span className="i angle"><FaAngleLeft /></span></a>
					<ul className="nav-sub">
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft />شهرها و استان ها</span>
							<a className="nav-sub-link" href="cryptodashbaord.html"></a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="cryptomarket.html">مناطق</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="cryptocurrencyexchange.html">مراحل خرید</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="cryptobuysell.html">نوع مشتری</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="cryptowallet.html">مشاغل</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="cryptowallet.html">نقش ها</a>
						</li>
						<li className="nav-sub-item">
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="cryptowallet.html">پست سازمانی</a>
						</li>
						
					</ul>
				</li>
				<li className={logstyle ? "nav-item" : "nav-item active show"} onClick={(event) => changeLogStyleHandler(event)}>
					<a className="nav-link with-sub" href="#"><span className="shape1"></span><span className="shape2"></span><span className="i sidemenu-icon"><RiFootprintLine /></span><span className="sidemenu-label">ردپای کاربران</span></a>
					
				</li>
			</ul>
		</div>
	</div>
    )
}

// const mapStateToProps = (state) => {
    
// };
//   const mapDispatchToProps =(dispatch) => {
    
// };
// export default connect(mapStateToProps,mapDispatchToProps)(Sidemenu);
export default Sidemenu;