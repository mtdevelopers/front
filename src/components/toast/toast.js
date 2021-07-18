import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { useState } from 'react';
import logo from "../../assets/icons/checkmark-circle-outline.svg";
import {IoShieldCheckmarkOutline} from "react-icons/io5";
import {HiOutlineShieldExclamation} from "react-icons/hi";
import * as actionCreators from "../../redux/actions/index";
import {connect} from "react-redux";
import "animate.css";

const Toastcomponent = (props) => {
    
    let toasticon = null;
    let btnStyle = null;
    let alertStyle = null;
    if(props.type === "error"){
        toasticon = <HiOutlineShieldExclamation className="text-danger w-75 h-100" />;
        btnStyle = "btn ripple btn-danger";
        alertStyle= "alert-center alert-height alert-top border-card-danger bg-white box-shadow custom-card card mb-0"
    }
    if(props.type === "success"){
        toasticon = <IoShieldCheckmarkOutline className="text-success w-75 h-100"/>;
        btnStyle = "btn ripple btn-success";
        alertStyle= "alert-center  alert-height alert-top border-card-success bg-white box-shadow custom-card card mb-0"
    }

    return(
        <>
            <div className="animation-fadeOut">
                <div className={alertStyle}>
                    <div className="alert text-center fade show px-3 d-flex justify-content-between align-items-center">
                        <div className="icon-width">
                            {toasticon}
                        </div>
                        <div className="d-flex flex-column align-items-start pr-0 maximumWidth">
                            <h3 className="mx-2">{props.title}!</h3>
                            <h6 className="tx-inverse">{props.body}</h6>
                        </div>
                        <span className={btnStyle} onClick={props.hideAlert} >بستن</span>
                    </div>
                </div>
            </div>
        
        </>

    )
}
const mapStateToProps = (state) => {
    return{

    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        hideAlert: () => dispatch(actionCreators.hide_error())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Toastcomponent);