import "../../../assets/scss/newStyle.scss";
import {IoCreateOutline} from "react-icons/io5";
import {AiOutlineEye} from "react-icons/ai";
import {BrowserRouter as Router, Switch,Route,Link, withRouter} from "react-router-dom";
import BreadCrumb from "../../../components/settings/breadcrumb/globalBread";
import Country from "./Country";
import State from "./State";
import City from "./City";
import Branch from "./Branch";
import {connect} from "react-redux";
import * as actionCreators from "../../../redux/actions/index";
import { useEffect } from "react";



const routes = [
    {
        path:"country",
        component:Country,
        name:"country",
    },
    {
        path:"state",
        component:State,
        name:"state",
    },
    {
        path:"city",
        component:City,
        name:"city",
    },
    {
        path:"branch",
        component:Branch,
        name:"branch",
    },
]

const Location = (props) => {
    useEffect(() => {
    props.getCountryList();
    props.getStateList();
    props.getCityList();
    },[])

    return(
        <>
            <BreadCrumb navArr={[{root:"setting",secondLevel:"location",addr:"country",title:"کشور"},{root:"setting",secondLevel:"location",addr:"state",title:"استان"},{root:"setting",secondLevel:"location",addr:"city",title:"شهر"}]}/>
            <Switch exact>
                {routes.map((route,index) => (
                <Route
                    key={index}
                    path={`/setting/location/${route.path}`}
                    children={route.component} />
                ))}
            </Switch>
        </>
    )
}
const mapStateToProps = (state) => {
    return{
        activateLocation:state.sidemenu.activateSetting
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getCountryList : () => dispatch(actionCreators.get_country_list()),
        getStateList : () => dispatch(actionCreators.get_state_list()),
        getCityList : () => dispatch(actionCreators.get_city_list())
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Location));