import logoA from "../assets/img/brand/logo-light.png";
import logoB from "../assets/img/svgs/user.svg";

const Authleft = (props) => {

    return(
        <div className="col-lg-6 col-xl-5 d-none d-lg-block text-center bg-primary details">
            <div className="mt-5 pt-4 p-2 pos-absolute">
                <img src={logoA} className="header-brand-img mb-4" alt="logo" />
                <div className="clearfix"></div>
                <img src={logoB} className="ht-100 mb-0" alt="user" />
                <h5 className="mt-4 text-white">سامانه تخصصی ملک تبریز</h5>
            </div>
        </div>
    )
}

export default Authleft;