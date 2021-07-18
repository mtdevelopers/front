import CreateBox from "../../../components/settings/createbox/CreateBox";
import ListData from "../../../components/listData/ListData";
import { withRouter } from "react-router";
import {connect} from "react-redux"
import * as actionCreators from "../../../redux/actions/index";
import { useEffect, useState } from "react";


const Country = (props) => {
    const listofcountry = props.listofcountry;
    

    return(
        <>
        
        <div className="row row-sm">
            <div className="col-lg-4 col-md-12">
                 <CreateBox listIdentifier="country" title={"ایجاد کشور"} haveParent={false} parentLabel={"شهر مربوطه"} />
                 
            </div>
            <div className="col-lg-5">
                <ListData listIdentifier="country" child={listofcountry} dropBtn={false} searchList={[""]} searchTitle={"لیست کشورها"} title={{titleA:"عنوان کشور",titleB:""}}/>
            </div>
            <div className="col-lg-3 col-md-12">
                <div className="card custom-card bg-warning">
                    <div className="card-body">
                        <span className="pb-3 font-weight-bold text-white">راهنمای افزودن کشور!</span>
                        <p className="mt-3 text-gray-800"> در این قسمت می توانید کشور جدیدی ایجاد کنید همچنین می توانید کشوری را حذف یا به روز رسانی کنید.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

const mapStateToProps = (state) => {
    return{
        listofcountry:state.country.listOfCountry,
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Country));