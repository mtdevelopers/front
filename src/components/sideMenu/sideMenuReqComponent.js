import {connect} from "react-redux";
import * as actionCreators from "../../redux/actions/index";

import {SiTripadvisor} from "react-icons/si";
import {FaAngleLeft} from "react-icons/fa";



const SideMenuReqComponent = (props) => {
    return( 
        <li className={props.sidemenuState.showReq ? "nav-item" : "nav-item active show"} onClick={props.showReq}>
					<a className="nav-link with-sub" href="#"><span className="shape1"></span><span className="shape2"></span><span className="i sidemenu-icon"><SiTripadvisor /></span><span className="sidemenu-label">ارتباط با مشتری</span><span className="i angle"><FaAngleLeft /></span></a>
					<ul className="nav-sub">
						<li className="nav-sub-item" onClick={props.activateReq}>
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommercedashboard.html">درخواست جدید</a>
						</li>
						<li className="nav-sub-item" onClick={props.activateReq}>
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceproducts.html">لیست درخواست ها</a>
						</li>
						<li className="nav-sub-item" onClick={props.activateReq}>
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceproductdetails.html">درخواست های من</a>
						</li>
						<li className="nav-sub-item" onClick={props.activateReq}>
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommercecart.html">در انتظار بررسی</a>
						</li>
						<li className="nav-sub-item" onClick={props.activateReq}>
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommercecheckout.html">زباله دان</a>
						</li>
						<li className="nav-sub-item" onClick={props.activateReq}>
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceorders.html">تقویم کاری</a>
						</li>
						<li className="nav-sub-item" onClick={props.activateReq}>
							<span className="angel"><FaAngleLeft /></span>
							<a className="nav-sub-link" href="ecommerceproducts.html">تنظیمات</a>
						</li>
					</ul>
				</li>
    )
}




const mapStateToProps = (state) => {
    return {
		sidemenuState:state.sidemenu
	}
};
  const mapDispatchToProps =(dispatch) => {
    return{
        showReq: () =>  dispatch(actionCreators.show_req()),
		activateReq: () => dispatch(actionCreators.activate_req()),
	}
};
export default connect(mapStateToProps,mapDispatchToProps)(SideMenuReqComponent);