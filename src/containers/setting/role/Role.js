import "../../../assets/scss/newStyle.scss";
import {IoCreateOutline} from "react-icons/io5";
import {AiOutlineEye} from "react-icons/ai";
import Checkbox from "./Checkbox";
import Rolecreator from "./RoleCreatore";
import Rolecard from "./Rolecard";

const Role = (props) => {
    return(
        <div className="row row-sm">
            <div className="col-lg-6 col-md-12">
                <Rolecreator />
            </div>
            <div className="col-lg-6 col-md-12">
                <div class="row row-sm">
                    <Rolecard roleTitle={"مشاور"}/>
                    <Rolecard roleTitle={"مدیر فروش"}/>
                    <Rolecard roleTitle={"مشاور جدید"}/>
                    <Rolecard roleTitle={"مشاور املاک"}/>
                    <Rolecard roleTitle={"معاون"}/>
                    <Rolecard roleTitle={"واحد قرارداد"}/>
                    <Rolecard roleTitle={"واحد حقوقی"}/>
                    <Rolecard roleTitle={"مدیر عامل"}/>

                </div>
            </div>
        </div>
    )
}

export default Role;