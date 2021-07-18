import "../../../assets/scss/newStyle.scss";
import {IoCreateOutline} from "react-icons/io5";


import StatusSellCheckbox from "./StatusSellCheck";
import StatusPropertyCheck from "./StatusPropertyCheck";
import CheckboxForResidential from "./CheckboxForResidential";
import CheckboxForCommercial from "./CheckboxForCommercial";
import CheckboxForVilla from "./CheckboxForVilla";
import CheckboxForIndustrial from "./CheckboxForIndustrial";
import CheckboxForLivestock from "./CheckboxForLivestock";
import CheckboxForCommercialRes from "./CheckboxForCommercialRes";



const OrganizationCreator = (props) => {
    return(
        <div className="card custom-card">
            <div className="card-body">
            <div className="d-flex align-items-center pb-3 justify-content-center">
                    <h3>عنوان</h3>
                    <div class="col-lg-6 mg-t-10 mg-lg-t-0">
                        <input class="form-control" placeholder="عنوان پست سازمانی را وارد کنید..." type="text" />
                    </div>
                </div>
                <h6 className="font-weight-bold mt-2 pt-2">نوع معامله</h6>
                <StatusSellCheckbox />
                <h6 className="font-weight-bold mt-2 pt-2 border-top">نوع کاربری</h6>
                <StatusPropertyCheck />

                <h6 className="font-weight-bold mt-2 pt-2 border-top">نوع ملک در مسکونی</h6>
                <CheckboxForResidential />

                <h6 className="font-weight-bold mt-2 pt-2 border-top">نوع ملک در تجاری-خدماتی</h6>
                <CheckboxForCommercial />

                <h6 className="font-weight-bold mt-2 pt-2 border-top">نوع ملک در تجاری-مسکونی</h6>
                <CheckboxForCommercialRes />

                <h6 className="font-weight-bold mt-2 pt-2 border-top">نوع ملک در باغ-ویلا</h6>
                <CheckboxForVilla />

                <h6 className="font-weight-bold mt-2 pt-2 border-top">نوع ملک در دامپروری صنعتی-کشاورزی</h6>
                <CheckboxForIndustrial />

            </div>
            <div className="d-flex justify-content-end p-4">
                    <button className="btn ripple btn-success btn-with-icon w-50">ثبت<span className="mr-2"><IoCreateOutline /></span></button>
            </div>
        </div>
        
    )
}

export default OrganizationCreator;