import Admin from "../../pages/Admin";
import React from "react";

const Bus = () => (
    <h3>Bus</h3>
);

const Cart = () => (
    <h3>Cart</h3>
);

const routes = [{
    path: "/admin",
    component: Admin,
    routes: [{
        path: '/admin/bus',
        component: Bus
    }, {
        path: '/admin/cart',
        component: Cart
    }]
}];

export default routes;