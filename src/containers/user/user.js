import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Layout from "../layout";
import Newuser from "./newuser/Newuser";
import Alluser from "./alluser/Alluser";
import Setting from "./setting/Setting";

const routes = [
    {
        path:"newuser",
        component:Newuser,
        name:"newuser"
    },
    {
        path:"alluser",
        component:Alluser,
        name:"alluser"
    },
    {
        path:"setting",
        component:Setting,
        name:"setting"
    }
]

const User = () => {
    return(
        <Layout>
            <h1>مشتریان</h1>
            <Switch exact>
                {routes.map((route,index) => (
                <Route
                    key={index}
                    path={`/user/${route.path}`}
                    children={route.component} />
                ))}
            </Switch>
        </Layout>
    )
}

export default User;