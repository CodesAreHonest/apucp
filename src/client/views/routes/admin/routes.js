import React from "react";

import Admin from "../../pages/Admin";
import Pending from "../../pages/Admin/Pending";

const Dashboard = () => (
    <h3>Dashboard</h3>
);

const routes = [{
    path: "/admin",
    component: Admin,
    routes: [{
        path: '/admin/dashboard',
        component: Dashboard
    }, {
        path: '/admin/pending/confessions',
        component: Pending
    }]
}];

export default routes;