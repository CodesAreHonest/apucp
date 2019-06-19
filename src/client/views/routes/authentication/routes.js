import AdminLogin from "../../pages/Auth/Login";
import AdminRedirect from "../../pages/Auth/Redirect";

const routes = [{
    path: '/auth/admin/login',
    exact: true,
    component: AdminLogin
}, {
    path: '/auth/admin/redirect',
    exact: true,
    component: AdminRedirect
}];

export default routes;