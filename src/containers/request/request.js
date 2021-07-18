import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Layout from "../layout";

import Newrequest from "./newrequest/Newrequest";
import Allrequest from "./allrequest/Allrequest";
import Myrequest from "./myrequest/Myrequest";
import Waitforconfirm from "./waitforconfirm/Waitforconfirm";
import Archived from "./archived/Archived";
import Setting from "./setting/Setting";

const routes = [
    {
        path: 'newrequest',
        exact:true,
        component: Newrequest,
        name: 'newrequest',
    },
    {
        path: 'allrequest',
        exact:true,
        component: Allrequest,
        name: 'allrequest',
    },
    {
        path: 'myrequest',
        exact:true,
        component: Myrequest,
        name: 'myrequest',
    },
    {
        path: 'waitforconfirm',
        exact:true,
        component: Waitforconfirm,
        name: 'waitforconfirm',
    },
    {
        path: 'archive',
        exact:true,
        component: Archived,
        name: 'archived',
    },
    {
        path: 'setting',
        exact:true,
        component: Setting,
        name: 'setting',
    },
]


const Request = () => {
    return(
        <Layout>
            <h1>درخواست ها</h1>
            <Switch exact>
                {routes.map((route,index) => (
                <Route
                    key={index}
                    path={`/request/${route.path}`}
                    children={route.component} />
                ))}
            </Switch>
        </Layout>
    )
}

export default Request;