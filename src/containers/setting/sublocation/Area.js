import CreateBox from "../../../components/settings/createbox/CreateBox";
import ListData from "../../../components/listData/listDataSubLocation";
import {connect} from "react-redux";
import { withRouter } from "react-router";



const Area = (props) => {
    const listOfArea = props.listOfArea;
    const listOfParentLocation = props.ListOfCity;

    return(
        <>
        <div className="row row-sm">
            <div className="col-lg-4 col-md-12">
                 <CreateBox listIdentifier="area" selectTitle="انتخاب شهر مربوطه" listOfParentLocation={listOfParentLocation} title={"ایجاد منطقه"} haveParent={true} parentLabel={"شهر مربوطه"}/>
            </div>
            <div className="col-lg-5">
                <ListData listIdentifier="area" dropBtn={true} dropTitle={"شهر"} parentLocation={listOfParentLocation} searchTitle={"لیست مناطق"} title={{titleA:"عنوان منطقه",titleB:"شهر مربوطه"}} child={listOfArea}/>
            </div>   
        <div className="col-lg-3">
            <div className="card custom-card bg-warning">
                <div className="card-body">
                    <span className="pb-3 font-weight-bold text-white">راهنمای افزودن منطقه</span>
                    <p className="mt-3 text-gray-800"> در این قسمت می توانید منطقه جدیدی ایجاد کرده و به شهر مربوطه متصل نمایید همچنین می توانید منطقه ای را حذف یا به روز رسانی کنید.</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
const mapStateToProps = (state) => {
    return{
        listOfArea:state.subLocation.listOfArea,
        ListOfCity:state.subLocation.ListOfCity
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Area));