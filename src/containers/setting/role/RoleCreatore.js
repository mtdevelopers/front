import "../../../assets/scss/newStyle.scss";
import {IoCreateOutline} from "react-icons/io5";


import Checkbox from "./Checkbox";
import CheckboxForRole from "./CheckboxForRole";


const Rolecreator = (props) => {
    return(
        <div className="card custom-card">
            <div className="card-body">
                <div className="d-flex align-items-center pb-3 justify-content-center">
                    <h3>عنوان</h3>
                    <div class="col-lg-6 mg-t-10 mg-lg-t-0">
                        <input class="form-control" placeholder="عنوان نقش را وارد کنید..." type="text" />
                    </div>
                </div>
                
                <Checkbox title={"آگهی ها"}/>
                <Checkbox title={"درخواست ها"}/>
                <Checkbox title={"مشاوران"}/>
                <Checkbox title={"مشتریان"}/>
                <Checkbox title={"کشور"}/>
                <Checkbox title={"استان"}/>
                <Checkbox title={"شهر"}/>
                <Checkbox title={"شعبه"}/>
                <Checkbox title={"منطقه"}/>
                <Checkbox title={"مسیر"}/>
                <Checkbox title={"نقش"}/>
                <Checkbox title={"پست سازمانی"}/>
                <Checkbox title={"مراحل خرید"}/>
                <Checkbox title={"نوع مشتری"}/>
                <Checkbox title={"شغل"}/>
                <Checkbox title={"بازخورد"}/>
                <Checkbox title={"رویداد"}/>
                <Checkbox title={"آمار کل"}/>
                <Checkbox title={"ردپای کاربران"}/>
                
                <div className="row row-sm py-2 border-top border-bottom">
                    <div className="col-lg-6 mg-t-20 mg-lg-t-0">
                        <label className="ckbox"><input type="checkbox" /><span>فقط آگهی های خود را ببیند!</span></label>
                    </div>
                    <div className="col-lg-6 mg-t-20 mg-lg-t-0">
                        <label className="ckbox"><input type="checkbox" /><span>فقط درخواست های خود را ببیند!</span></label>
                    </div>
                </div>
                <h6 className="font-weight-bold mt-2 pt-2">سمت این نقش را انتخاب کنید!</h6>
                <CheckboxForRole title={""}/>
            </div>
            <div className="d-flex justify-content-end p-4">
                    <button className="btn ripple btn-success btn-with-icon w-50">ثبت<span className="mr-2"><IoCreateOutline /></span></button>
            </div>
        </div>
        
    )
}

export default Rolecreator;