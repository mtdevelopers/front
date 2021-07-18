import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Layout from "../layout";
import Newrealtor from "./newrealtor/Newrealtor";
import Allrealtor from "./allrealtor/Allrealtor";
import Setting from "./setting/Setting";
const routes = [
    {
        path: 'newrealtor',
        exact:true,
        component: Newrealtor,
        name: 'newrealtor',
    },
    {
        path: 'allrealtor',
        exact:true,
        component: Allrealtor,
        name: 'allrealtor',
    },
    {
        path: 'setting',
        exact:true,
        component: Setting,
        name: 'setting',
    },
]


const Realtor = () => {
    return(
        <Layout>
            <h1>مشاوران</h1>
            <Switch exact>
                {routes.map((route,index) => (
                <Route
                    key={index}
                    path={`/realtor/${route.path}`}
                    children={route.component} />
                ))}
            </Switch>
        </Layout>
    )
}

export default Realtor;