import Layout from "../layout";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Newproperty from "./newproperty/Newproperty";
import Myproperty from "./myproperty/Myproperty";
import Allproperties from "./allproperties/Allproperties";
import Waitforconfirm from './waitforonfirm/Waitforconfirm';
import Archived from "./archived/Archived";
import Recyclebin from "./recyclebin/Recyclebin";
import Propertysetting from './setting/Propertysetting';
import { connect } from "react-redux";

const routes = [
    {
        path: 'newproperty',
        exact:true,
        component: Newproperty,
        name: 'newproperty',
    },
    {
        path: 'myproperty',
        exact:true,
        component: Myproperty,
        name: 'myproperty',
    },
    {
        path: 'allproperty',
        exact:true,
        component: Allproperties,
        name: 'allProperty',
    },
    {
        path: 'waitforconfirm',
        exact:true,
        component: Waitforconfirm,
        name: 'waitforconfirm',
    },
    {
        path: 'archived',
        exact:true,
        component: Archived,
        name: 'archived',
    },
    {
        path: 'recyclebin',
        exact:true,
        component: Recyclebin,
        name: 'recyclebin',
    },
    {
        path: 'setting',
        exact:true,
        component: Propertysetting,
        name: 'propertysetting',
    },
]

const Property = () => {
    return(
        <Layout>
            <h1>آگهی ها</h1>
                <Switch exact>
                    {routes.map((route,index) => (
                    <Route
                        key={index}
                        path={`/property/${route.path}`}
                        children={route.component} />
                    ))}
                </Switch>
        </Layout>
    )
}
const mapStateToProps = (state) => {
    return{

    }
}
const mapDispatchToProps = (state) => {
    return{

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Property);