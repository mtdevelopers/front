import React,{ useEffect, useRef, useState } from 'react';
import Authleft from './Authleft';
import Authright from './Authright';
import {connect} from "react-redux";
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import Alert from "../components/alert/Alert";
import * as actionCreators from "../redux/actions/index";

const Auth = (props) => {
    const transport = <Redirect to="/" />

    console.log(props.error);
    return (
        <div className="main-body leftmenu">
            {props.success && transport}
            <div className="page main-signin-wrapper">
                {props.error && 
                    <Alert alertType="danger" alertTitle="خطا" alertDescription="شماره تلفن همراه یا رمز عبور صحیح نمی باشد!"  />
                }
                <div className="row signpages text-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="row row-sm">
                                <Authleft />
                                <Authright />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
 
}


const mapStateToProps = (state) => {
    return{
        error:state.auth.error,
        success:state.auth.success,

    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        hideError : () =>dispatch(actionCreators.hide_error),
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Auth));