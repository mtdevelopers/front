import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

import BreadCrumbUser from "../../../components/settings/breadcrumb/globalBread";

import EventType from "./EventType";
import Feedback from "./Feedback";
import Rejection from "./Rejection";


const routes = [
    {
        path:"event",
        component:EventType,
        name:"event",
    },
    {
        path:"feedback",
        component:Feedback,
        name:"feedback",
    },
    {
        path:"rejection",
        component:Rejection,
        name:"rejection",
    },
]




const Template = (props) => {
    return(
        <>
            <BreadCrumbUser navArr={[{root:"setting",secondLevel:"template",addr:"event",title:"رویداد",active:true},{root:"setting",secondLevel:"template",addr:"feedback",title:"بازخورد"},{root:"setting",secondLevel:"template",addr:"rejection",title:"دلایل رد"}]}/>
            <Switch exact>
                {routes.map((route,index) => (
                <Route
                    key={index}
                    path={`/setting/template/${route.path}`}
                    children={route.component} />
                ))}
            </Switch>
        </>
    )
}

export default Template;