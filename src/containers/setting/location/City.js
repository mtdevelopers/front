import CreateBox from "../../../components/settings/createbox/CreateBox";
import ListData from "../../../components/listData/ListData";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actionCreators from "../../../redux/actions/index";

const City = (props) => {
    const listOfParentLocation = props.listofstate;
    const listofcity = props.listofcity;    

    return(
        <>
        <div className="row row-sm">
            <div className="col-lg-4 col-md-12">
                 <CreateBox listIdentifier="city" selectTitle="انتخاب استان مربوطه"  listOfParentLocation={listOfParentLocation} title={"عنوان شهر"} haveParent={true} parentLabel={"استان مربوطه"}/>
            </div>
            <div className="col-lg-5">
                <ListData listIdentifier="city" child={listofcity} parentLocation={listOfParentLocation} parentName="state" dropBtn={true} dropTitle={"استان"}  searchTitle={"لیست شهرها"} title={{titleA:"عنوان شهر",titleB:"استان مربوطه"}} />
            </div>   
        <div className="col-lg-3">
            <div className="card custom-card bg-warning">
                <div className="card-body">
                    <span className="pb-3 font-weight-bold text-white">راهنمای افزودن شهر</span>
                    <p className="mt-3 text-gray-800"> در این قسمت می توانید شهر جدیدی ایجاد کرده و به استان مربوطه متصل نمایید همچنین می توانید شهری را حذف یا به روز رسانی کنید.</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}


const mapStateToProps = (state) => {
    return{
        listofstate : state.country.listOfState,
        listofcity : state.country.listOfCity
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(City));