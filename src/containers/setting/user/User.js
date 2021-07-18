import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

import BreadCrumbUser from "../../../components/settings/breadcrumb/globalBread";
import Customertype from "./Customertype";
import Buystep from "./Buystep";
import Job from "./Job";


const routes = [
    {
        path:"buystep",
        component:Buystep,
        name:"buystep",
    },
    {
        path:"customertype",
        component:Customertype,
        name:"customertype",
    },
    {
        path:"job",
        component:Job,
        name:"job",
    },
]




const User = (props) => {
    return(
        <>
            <BreadCrumbUser navArr={[{root:"setting",secondLevel:"user",addr:"buystep",title:"مراحل خرید",active:true},{root:"setting",secondLevel:"user",addr:"customertype",title:"نوع مشتری"},{root:"setting",secondLevel:"user",addr:"job",title:"شغل"}]}/>
            <Switch exact>
                {routes.map((route,index) => (
                <Route
                    key={index}
                    path={`/setting/user/${route.path}`}
                    children={route.component} />
                ))}
            </Switch>
        </>
    )
}

export default User;