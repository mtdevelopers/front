import { useRef } from "react";
import logoA from "../assets/img/brand/logo-light.png";
import {connect} from "react-redux";
import * as actionCreators from "../redux/actions/index";


const Authright = (props) => {
    const usernameInput = useRef("");
    const passwordInput = useRef("");
    const getUserInput = (e) => {
        e.preventDefault();
        console.log(usernameInput.current.value);
        console.log(passwordInput.current.value);
        const user = {
            mobileNumber:usernameInput.current.value,
            password:passwordInput.current.value
        };
        props.logUserIn(user);
    }
return(
    <div class="col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form ">
        <div class="container-fluid">
            <div class="row row-sm">
                <div class="card-body mt-2 mb-2">
                    <img src={logoA} class=" d-lg-none header-brand-img text-left float-left mb-4" alt="logo" />
                    <div class="clearfix"></div>
                    <form onSubmit={getUserInput}>
                        <h5 class="text-right mb-2">به حساب خود وارد شوید</h5>
                        <div class="form-group text-right">
                            <label>شماره تلفن همراه</label>
                            <input class="form-control" placeholder=" شماره تلفن همراه خود را وارد کنید" type="Number" ref={usernameInput} />
                        </div>
                        <div class="form-group text-right">
                            <label>کلمه عبور</label>
                            <input class="form-control" placeholder="رمز ورود خود را وارد کنید" type="password" ref={passwordInput} />
                        </div>
                        <button class="btn ripple btn-main-primary btn-block" >ورود</button>
                    </form>
                    <div class="text-right mt-5 ml-0">
                        <div class="mb-1"><a href="#">رمز عبور خود را فراموش کرده اید؟</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
		logUserIn: (userData) => dispatch(actionCreators.start_auth(userData)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Authright);