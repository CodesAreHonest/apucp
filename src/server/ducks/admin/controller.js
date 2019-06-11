
import {validationHandler} from "../../helpers/validation";

import AdminStore from './store';

export const postRegister = async (req, res) => {

    let validation = await validationHandler(req, res);

    if (validation.response_code === 422) {
        return res.status(422).send(validation);
    }

    const { access_token } = req.body;
    const adminStore = new AdminStore();

    try {
        let fb_page_permission = await adminStore.verify_facebook_page_permission(access_token);
        const { fb_page_access_token } = fb_page_permission;

        let authorise_admin = await adminStore.register(access_token, fb_page_access_token);

        return res.status(200).send(authorise_admin);
    }
    catch (err) {
        return res.status(500).send(err);
    }
};
