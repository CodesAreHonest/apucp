
import {validationHandler} from "../../helpers/validation";

import AdminStore from './store';
import Facebook from "./facebook";

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

        let authorise_admin = await adminStore.insert_or_update(access_token);


    }
    catch (err) {
        return res.status(500).send(err);
    }

    // AdminStore.verify_facebook_account(access_token)
    //     .then (page_access_token => {
    //         AdminStore.insert_or_update(access_token, page_access_token);
    //     })
    //     .catch (err => {
    //         return res.status(500).send(err);
    //     });
    //
    // console.log (fbPageAccessToken);

    // AdminStore.verify_facebook_account(access_token).then (response => {
    //     return res.status(200).send(response)
    // }).catch (err => {
    //     return res.status(500).send(err);
    // });

    // AdminStore.insert_or_update (
    //     user_id, name, email, picture, access_token
    // ).then (response => {
    //     return res.status(200).send(response);
    // }).catch (err => {
    //     return res.status(500).send(err);
    // });

};
