import AdminLogin from "../../pages/Auth/Login";
import AdminRedirect from "../../pages/Auth/Redirect";
import PrivacyPolicy from "../../pages/Auth/PrivacyPolicy";

const routes = [{
    path: '/auth/admin/login',
    exact: true,
    component: AdminLogin
}, {
    path: '/auth/admin/redirect',
    exact: true,
    component: AdminRedirect
}, {
    path: '/auth/admin/policy',
    exact: true,
    component: PrivacyPolicy
}];

export default routes;