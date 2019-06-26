import React from "react";

import Admin from "../../pages/Admin";
import Pending from "../../pages/Admin/Pending";
import Approve from "../../pages/Admin/Approve";
import RejectedConfessions from "../../pages/Admin/Rejected";

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
    }, {
        path: '/admin/approved/confessions',
        component: Approve
    }, {
        path: '/admin/rejected/confessions',
        component: RejectedConfessions
    }]
}];

export default routes;