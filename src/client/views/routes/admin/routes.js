import Admin from "../../pages/Admin";
import React from "react";

const Dashboard = () => (
    <h3>Dashboard</h3>
);

const PendingConfession = () => (
    <h3>Pending Confession</h3>
);

const routes = [{
    path: "/admin",
    component: Admin,
    routes: [{
        path: '/admin/dashboard',
        component: Dashboard
    }, {
        path: '/admin/cart',
        component: PendingConfession
    }]
}];

export default routes;