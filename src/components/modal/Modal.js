import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { useState } from 'react';
import logo from "../../assets/icons/checkmark-circle-outline.svg";
import {IoShieldCheckmarkOutline} from "react-icons/io5";
import {HiOutlineShieldExclamation} from "react-icons/hi";
import * as actionCreators from "../../redux/actions/index";
import {connect} from "react-redux";
import "animate.css";

const Modal = (props) => {
    
    

    return(
        <>
           <div className={props.error ? "modal modal-open d-block" : "modal"}>
            <div class="pd-20 bg-light">
                <div class="modal d-block">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content modal-content-demo shadow">
                            <div class="modal-header">
                                <h6 class="modal-title"></h6><button aria-label="بستن" class="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span></button>
                            </div>
                            <div class="modal-body">
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                            </div>
                            <div class="modal-footer">
                                <button class="btn ripple btn-primary" type="button">ذخیره تغییرات</button>
                                <button class="btn ripple btn-secondary" type="button">بستن</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>

    )
}
const mapStateToProps = (state) => {
    return{
        error : state.country.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        hideAlert: () => dispatch(actionCreators.hide_error())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);