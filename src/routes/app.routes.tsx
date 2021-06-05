import React from "react"
import { Switch, Route } from "react-router-dom";

import List from "../pages/list";
import Dashboard from "../pages/dashboard";
import Layout from "../components/layout";

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/listar/:type" exact component={List} />
        </Switch>
    </Layout>
)

export default AppRoutes;