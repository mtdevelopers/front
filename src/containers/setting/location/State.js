import CreateBox from "../../../components/settings/createbox/CreateBox";
import ListData from "../../../components/listData/ListData";
import { useEffect, useState } from "react";
import * as actionCreators from "../../../redux/actions/index";
import { withRouter } from "react-router";
import { connect } from "react-redux";

const State = (props) => {
    const listOfParentLocation = props.listOfCountry;
    const listofstate = props.listOfState;

    return(
        <>
        <div className="row row-sm">
            <div className="col-lg-4 col-md-12">
                 <CreateBox listIdentifier="state" selectTitle="انتخاب کشور مربوطه" listOfParentLocation={listOfParentLocation} title={"عنوان استان"} haveParent={true} parentLabel={"کشور مربوطه"}/>
            </div>
            <div className="col-lg-5">
                <ListData listIdentifier="state" child={listofstate} parentLocation={listOfParentLocation} parentName="country" dropBtn={true} dropTitle={"کشور"}  searchTitle={"لیست استانها"} title={{titleA:"عنوان استان",titleB:"کشور مربوطه"}} />
            </div>   
            <div className="col-lg-3">
            <div className="card custom-card bg-warning">
                <div className="card-body">
                    <span className="pb-3 font-weight-bold text-white">راهنمای افزودن استان</span>
                    <p className="mt-3 text-gray-800"> در این قسمت می توانید استان جدیدی ایجاد کرده و به کشور مربوطه متصل نمایید همچنین می توانید استانی را حذف یا به روز رسانی کنید.</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

const mapStateToProps = (state) => {
    return{
        listOfState : state.country.listOfState,
        listOfCountry : state.country.listOfCountry
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        
        
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(State));