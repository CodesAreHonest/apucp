import AdminLogin from "../../pages/Auth/Login";
import AdminRedirect from "../../pages/Auth/Redirect";
import PrivacyPolicy from "../../pages/Auth/PrivacyPolicy";
import TermAndCondition from "../../pages/Auth/TermAndCondition";

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
}, {
    path: '/auth/admin/terms-and-conditions',
    exact: true,
    component: TermAndCondition
}];

export default routes;