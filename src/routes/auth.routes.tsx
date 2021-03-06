import React from "react";
import {Switch, Route} from "react-router-dom";
import SignIn from "../pages/sign-in";

const AuthRoute: React.FC = () => (
    <Switch>
        <Route path="/" component={SignIn}/>
    </Switch>
)

export default AuthRoute;