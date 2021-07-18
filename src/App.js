import './App.scss';
import React from 'react';
import './assets/scss/color.scss';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Dashboard from "./containers/dashboard/dashboard";
import Log from "./containers/log/log";
import Property from "./containers/property/property";
import Realtor from "./containers/realtor/realtor";
import Request from "./containers/request/request";
import Setting from "./containers/setting/Setting";
import User from "./containers/user/user";
import Authcomponent from "./authPage/Authlogin";


function App() {
  const routes = [
    {
      path: '/',
      exact:true,
      component: Dashboard,
      name: 'dashboard',
    },
    {
      path: '/login',
      exact:true,
      component: Authcomponent,
      name: 'login',
    },
    {
      path:"/property",
      component:Property,
      name:"property",
    },
    {
      path:"/request",
      component:Request,
      name:"request",
    },
    {
      path:"/realtor",
      component:Realtor,
      name:"realtor",
    },
    {
      path:"/user",
      component:User,
      name:"realtor",
    },
    {
      path:"/setting",
      component:Setting,
      name:"setting",
    },
    {
      path:"/log",
      component:Log,
      name:"log",
    },
];


  return (
    <Router>
      <Switch>
        {routes.map((route,index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={route.component} />
        ))}
      </Switch>
    </Router>
  );
}
export default App;


