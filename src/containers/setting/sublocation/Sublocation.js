import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Area from "./Area";
import Branch from "./Branch";
import Breadcrumb from "../../../components/settings/breadcrumb/globalBread";
import { useEffect } from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router";
import * as actionCreators from "../../../redux/actions/index";

const Sublocation = (props) => {
    const routes = [
        {
            path:"area",
            component:Area,
            name:"area",
        },
        {
            path:"branch",
            component:Branch,
            name:"branch",
        }
    ]
    
    useEffect(() => {
        props.getAreaList();
        props.getCityList();
    },[]);

    return(
        <>
            <Breadcrumb navArr={[{root:"setting",secondLevel:"sublocation",addr:"area",title:"منطقه" ,active:true},{root:"setting",secondLevel:"sublocation",addr:"branch",title:"شعبه"}]}/>
            <Switch exact>
                {routes.map((route,index) => (
                <Route
                    key={index}
                    path={`/setting/sublocation/${route.path}`}
                    children={route.component} />
                ))}
            </Switch>
        </>
    )
}
const mapStateToProps = (state) => {
    return{
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getAreaList : () => dispatch(actionCreators.get_area_list()),
        getCityList : () => dispatch(actionCreators.get_city_list())

    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Sublocation));



